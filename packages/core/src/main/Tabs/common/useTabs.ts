import {
    KeyboardEvent,
    KeyboardEventHandler,
    MouseEvent,
    MouseEventHandler,
    UIEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    ownerWindow,
    TabItem,
    useEnhancedEffect,
    useIsFirstRender,
    useKeyboardNavigation,
    useResizeObserver,
} from '@core';
import { TabsPropsCommon, TabsScrollPosition } from './types';
import { TABS_SCROLL_POSITIONS } from './constants';

const scrollIntoViewOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'nearest',
};

export const useTabs = <T extends TabItem = TabItem>({
    items,
    value: externalValue,
    defaultValue,
    onSetValue,
    scrollOptions: scrollOptionsProp,
}: Omit<TabsPropsCommon<T>, 'TabItemComponent'>) => {
    const isFirstRender = useIsFirstRender();
    const countOfValueChanges = useRef(0);
    const selectedRef = useRef<HTMLButtonElement>(null);
    const internalRef = useRef<HTMLDivElement>(null);
    const pointerInnerRef = useRef<HTMLDivElement>(null);

    const [scrollPosition, setScrollPosition] = useState<TabsScrollPosition>(TABS_SCROLL_POSITIONS.none);
    const [internalValue, setInternalValue] = useState(defaultValue ?? items[0].value);
    const [selectedLeft, setSelectedLeft] = useState(0);

    const { width: rootWidth } = useResizeObserver(internalRef);
    const { width: selectedWidth } = useResizeObserver(selectedRef);

    const value = externalValue ?? internalValue;

    const onSelect = (item: T) => {
        onSetValue?.(item);
        setInternalValue(item.value);
    };

    const detectScrollPosition = (
        scrollLeft: number,
        scrollWidth: number,
        clientWidth: number,
    ) => {
        if (scrollWidth <= clientWidth) {
            setScrollPosition(TABS_SCROLL_POSITIONS.none);
        } else if (scrollLeft === 0) {
            setScrollPosition(TABS_SCROLL_POSITIONS.start);
        } else if (Math.floor(scrollWidth - scrollLeft) <= clientWidth) {
            setScrollPosition(TABS_SCROLL_POSITIONS.end);
        } else {
            setScrollPosition(TABS_SCROLL_POSITIONS.between);
        }
    };

    const onScroll: UIEventHandler<HTMLDivElement> = (event) => {
        const { scrollWidth, scrollLeft, clientWidth } = event.currentTarget;

        detectScrollPosition(scrollLeft, scrollWidth, Math.ceil(clientWidth));
    };

    const initOnSelect = (
        item: T,
        handler?: MouseEventHandler<HTMLButtonElement>,
    ) => (e: MouseEvent<HTMLButtonElement>) => {
        onSelect(item);
        handler?.(e);
    };

    const initOnKeyPress = (
        item: T,
        handler?: KeyboardEventHandler<HTMLButtonElement>,
    ) => (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            onSelect(item);
        }
        handler?.(e);
    };

    const initOnScroll = (
        handler?: UIEventHandler<HTMLDivElement>,
    ): UIEventHandler<HTMLDivElement> => (event) => {
        onScroll(event);
        handler?.(event);
    };

    useKeyboardNavigation({
        listRef: internalRef,
        orientation: 'horizontal',
    });

    useEnhancedEffect(() => {
        // Для отключения анимации при первом появлении
        countOfValueChanges.current += 1;
    }, [value]);

    useEffect(() => {
        const selected = selectedRef.current;
        if (!selected) { return; }

        setSelectedLeft(selected.offsetLeft);

        /** Scroll к выбранному элементу */

        const scrollOptions = {
            ...scrollIntoViewOptions,
            ...scrollOptionsProp ?? {},
        };

        if (isFirstRender || scrollOptions.disabled) { return; }

        const { behavior, block, inline } = scrollOptions;

        if (!scrollOptions.padding) {
            selected.scrollIntoView({ behavior, block, inline });
        } else {
            const scrollAnchor = document.createElement('div');

            scrollAnchor.style.cssText += `
                position: absolute;
                top: 0;
                left: ${-scrollOptions.padding}px;
                right: ${-scrollOptions.padding}px;
                height: 100%;
            `;

            selected.appendChild(scrollAnchor);

            scrollAnchor.scrollIntoView({ behavior, block, inline });

            selected.removeChild(scrollAnchor);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, selectedWidth]); // ширина выбранного элемента может измениться после первого рендера

    useEffect(() => {
        const root = internalRef.current;

        if (!root || !rootWidth) { return; }

        if (pointerInnerRef.current) {
            const computedStyles = ownerWindow(internalRef.current)
                .getComputedStyle(internalRef.current);
            const paddings = `(${computedStyles.paddingLeft} + ${computedStyles.paddingRight})`;

            pointerInnerRef.current.style.width = `calc(${rootWidth}px - ${paddings})`;
        }

        const { scrollLeft, scrollWidth } = root;

        detectScrollPosition(scrollLeft, scrollWidth, rootWidth);
    }, [items, internalRef, rootWidth]);

    return {
        value,
        internalRef,
        selectedRef,
        pointerInnerRef,
        selectedLeft,
        selectedWidth,
        scrollPosition,
        onScroll,
        onSelect,
        initOnScroll,
        initOnSelect,
        initOnKeyPress,
        isFirstAppearance: countOfValueChanges.current === 1,
    };
};
