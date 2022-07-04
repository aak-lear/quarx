import React, { createRef, FC, forwardRef, MouseEventHandler, useState } from 'react';
import { CHECKBOX_COLOR, Selection } from '@core';
import { usePropsOverwrites } from '@core/styles';
import { Checkbox, CheckboxSelectionProps } from '.';

// TODO: После всех видов кнопок доработать

export const CheckboxSelection: FC<CheckboxSelectionProps> = forwardRef<HTMLDivElement, CheckboxSelectionProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('CheckboxSelection', initialProps);
    const {
        errorText,
        size,
        borderRadius,
        disabled,
        focused: externalFocus,
        checked,
        checkboxProps,
        onMouseEnter,
        onMouseLeave,
    } = props;

    const [focus, setFocus] = useState(externalFocus ?? false);
    const [hover, setHover] = useState(false);

    const mouseLeaveHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        setHover(false);
        onMouseLeave?.(e);
    };

    const mouseEnterHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        setHover(true);
        onMouseEnter?.(e);
    };

    const checkboxRef = createRef<HTMLInputElement>();

    return (
        <Selection
            {...props}
            className={cn('root')}
            focused={externalFocus ?? focus}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            ref={ref}
            disabled={checkboxRef.current?.disabled || disabled}
            leftAdornment={(
                <Checkbox
                    inputRef={checkboxRef}
                    checked={checked}
                    color={errorText
                        ? CHECKBOX_COLOR.danger
                        : CHECKBOX_COLOR.brand}
                    size={size}
                    hover={hover}
                    disabled={checkboxRef.current?.disabled || disabled}
                    disableFocus
                    borderRadius={borderRadius}
                    {...checkboxProps}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            )}
        />
    );
});
