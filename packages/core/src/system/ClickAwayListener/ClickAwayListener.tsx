import React, { DOMAttributes, Ref, useEffect } from 'react';
import {
    clickedRootScrollbar,
    makeEventFromSyntheticEvent,
    ownerDocument,
    useEventCallback,
    useForkRef,
} from '@core/utils';
import {
    ClickAwayListenerProps,
    ClickAwayListenerEvents,
} from './types';

const getDocumentListenerEffect = (
    node: Element | null,
    events: {
        syntheticEvent: ClickAwayListenerEvents | 'onTouchMove';
        listener: EventListener;
    }[],
): () => void => {
    const doc = ownerDocument(node);

    events.forEach(({ syntheticEvent, listener }) => {
        const event = makeEventFromSyntheticEvent(syntheticEvent);
        doc.addEventListener(event, listener);
    });

    return () => {
        events.forEach(({ syntheticEvent, listener }) => {
            const event = makeEventFromSyntheticEvent(syntheticEvent);
            doc.removeEventListener(event, listener);
        });
    };
};

export const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
    disableReactTree = false,
    mouseEvent: syntheticMouseEvent = 'onClick',
    touchEvent: syntheticTouchEvent = 'onTouchEnd',
    onClickAway,
    children,
}) => {
    const nodeRef = React.useRef<Element>(null);
    const movedRef = React.useRef(false);
    const activatedRef = React.useRef(false);
    const syntheticEventRef = React.useRef(false);

    React.useEffect(() => {
        setTimeout(() => { activatedRef.current = true; });
        return () => { activatedRef.current = false; };
    }, []);

    const handleRef = useForkRef(
        (children as typeof children & { ref: Ref<Element> }).ref,
        nodeRef,
    );

    const handleClickAway = useEventCallback((event: MouseEvent | TouchEvent) => {
        const insideReactTree = syntheticEventRef.current;
        syntheticEventRef.current = false;

        const doc = ownerDocument(nodeRef.current);

        const cancelHandling = !activatedRef.current
            || !nodeRef.current
            || clickedRootScrollbar(event, doc);
        if (cancelHandling) { return; }

        if (movedRef.current) {
            movedRef.current = false;
            return;
        }

        const insideDOM = event.composedPath().includes(nodeRef.current);
        if (!insideDOM && (disableReactTree || !insideReactTree)) {
            onClickAway(event);
        }
    }) as EventListener;

    const createHandleSynthetic = (handlerName: ClickAwayListenerEvents) => (
        (event: React.SyntheticEvent) => {
            syntheticEventRef.current = true;

            const childrenPropsHandler = children.props[handlerName];
            if (childrenPropsHandler) {
                childrenPropsHandler(event);
            }
        }
    );

    const childrenProps: React.RefAttributes<Element>
    & Pick<DOMAttributes<Element>, ClickAwayListenerEvents> = {
        ref: handleRef,
    };

    const touchEventDisabled = syntheticTouchEvent === false;
    if (!syntheticTouchEvent && !touchEventDisabled) {
        Object.assign(childrenProps, {
            [syntheticTouchEvent]: createHandleSynthetic(syntheticTouchEvent),
        });
    }

    useEffect(() => {
        if (!syntheticTouchEvent) { return undefined; }

        return getDocumentListenerEffect(
            nodeRef.current,
            [
                {
                    syntheticEvent: syntheticTouchEvent,
                    listener: handleClickAway,
                },
                {
                    syntheticEvent: 'onTouchMove',
                    listener: () => { movedRef.current = true; },
                },
            ],
        );
    }, [handleClickAway, syntheticTouchEvent]);

    const mouseEventDisabled = syntheticMouseEvent === false;
    if (!syntheticMouseEvent && !mouseEventDisabled) {
        Object.assign(childrenProps, {
            [syntheticMouseEvent]: createHandleSynthetic(syntheticMouseEvent),
        });
    }

    React.useEffect(() => {
        if (!syntheticMouseEvent) { return undefined; }

        return getDocumentListenerEffect(
            nodeRef.current,
            [{
                syntheticEvent: syntheticMouseEvent,
                listener: handleClickAway,
            }],
        );
    }, [handleClickAway, syntheticMouseEvent]);

    return React.cloneElement(children, childrenProps);
};
