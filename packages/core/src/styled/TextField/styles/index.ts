import { changeOpacity, KeysFromUseStyles, makeStyles, typography } from '@core/styles';
import { CSSObject, keyframes } from '@emotion/react';
import { paramsToCss } from '@core/utils/paramsToCss';
import { TextFieldCSSVarKeys } from '@core/src/styled/TextField/styles/vars';
import { cssVar } from '@core/utils/cssVars';
import { BaseTextFieldStyleParams, TextFieldStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, transitions, borderRadii },
    {
        filled, error,
        borderRadius, size, loading,
        focused, colorBase,
        multiline, overflowed,
        disabled, readOnly,
        disableLabel,
        hasValue,
        clearIconVisibleOn,
        rightItemIsExist,
        disableHoverStyles,
        counterVisibleOn,
        bottomIsVisible,
        bottomIsAbsolute,
    }: BaseTextFieldStyleParams & TextFieldStyleParams,
    {
        cssOuterShadowWidth,
        cssOuterShadowColor,
        cssBorderShadowWidth,
        cssBorderShadowColor,
    }: Record<TextFieldCSSVarKeys, string>,
) => {
    const vertCenter: CSSObject = {
        display: 'flex',
        alignItems: 'center',
    };

    const hidden: CSSObject = {
        visibility: 'hidden',
        opacity: 0,
    };

    const showClearIcon = keyframes({
        from: {
            opacity: 0,
            width: 0,
        },
        '33%': {
            width: 24,
            opacity: 0,
        },
        to: {
            opacity: 1,
            width: 24,
        },
    });

    const baseConditionsToShowClear = hasValue && !disabled && !readOnly;

    const visibleClearIcon: CSSObject = {
        ...baseConditionsToShowClear && {
            marginRight: rightItemIsExist ? 8 : 0,
            animationName: showClearIcon,
        },
    };

    const shadow = `inset 0 0 0 ${cssVar(cssBorderShadowWidth)} ${cssVar(cssBorderShadowColor)}, 
    0 0 0 ${cssVar(cssOuterShadowWidth)} ${cssVar(cssOuterShadowColor)}`;

    return ({
        root: [
            {
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'none',
                minWidth: 'fit-content',
                color: palette.text.main,
                width: 360,
                position: 'relative',
            },
        ],
        field: [
            {
                width: '100%',
                position: 'relative',
                padding: 0,
                transition: transitions.create(['box-shadow', 'background-color']),
                boxSizing: 'border-box',
                borderRadius: borderRadii[borderRadius],
                paddingLeft: 14,
                paddingRight: 14,

                [cssBorderShadowWidth]: '1px',
                [cssOuterShadowWidth]: '3px',
                [cssOuterShadowColor]: 'transparent',
                [cssBorderShadowColor]: 'transparent',
                boxShadow: shadow,

                '&:hover': {
                    ...!disableHoverStyles && {
                        backgroundColor: palette.background.main,

                        [cssBorderShadowColor]: palette.border.secondary,
                        [cssOuterShadowColor]: changeOpacity(palette.text.main, 0.06),
                    },

                    '& .QxTextField-closeIcon': {
                        color: palette.text.main,
                        ...clearIconVisibleOn === 'interact' && visibleClearIcon,
                    },
                },
            },
            vertCenter,
            paramsToCss(colorBase)({
                main: {
                    backgroundColor: palette.background.textField.main,
                },
                secondary: {
                    backgroundColor: palette.background.main,

                    [cssBorderShadowColor]: 'transparent',
                    [cssOuterShadowColor]: palette.border.secondary,
                    [cssOuterShadowWidth]: '1px',
                },
            }),
            paramsToCss(size)({
                small: {
                    height: 40,
                },
                medium: {
                    height: 52,
                },
                large: {
                    height: 60,
                },
            }),
            multiline && {
                height: 'max-content',
            },

            focused && !loading && {
                '&&': {
                    backgroundColor: palette.background.main,
                    [cssBorderShadowColor]: palette.colors.brand.default,
                    [cssOuterShadowColor]: palette.colors.brand.alpha.min,
                    [cssBorderShadowWidth]: '2px',
                    [cssOuterShadowWidth]: '4px',
                },
            },
            error && {
                '&&': {
                    backgroundColor: palette.background.main,
                    [cssBorderShadowColor]: palette.colors.danger.default,
                    [cssOuterShadowColor]: palette.colors.danger.alpha.min,
                    [cssBorderShadowWidth]: '2px',
                    [cssOuterShadowWidth]: '4px',
                },
            },
            disabled && {
                '&&': {
                    backgroundColor: palette.disabled.bg,
                    color: palette.text.secondary,
                    boxShadow: 'none',
                    cursor: 'not-allowed',
                },
            },
            readOnly && {
                cursor: 'unset',
            },
        ],
        content: [
            {
                boxSizing: 'border-box',
                display: 'flex',
                position: 'relative',
                flexGrow: 1,
                cursor: 'pointer',
            },
            loading && hidden,
            paramsToCss(size)({
                small: {
                    padding: '8px 0',
                },
                medium: {
                    padding: '22px 4px 6px',
                },
                large: {
                    padding: '25px 4px 7px',
                },
            }),
            disableLabel && paramsToCss(size)({
                medium: {
                    padding: '14px 4px',
                },
                large: {
                    padding: '16px 4px',
                },
            }),
            disabled && {
                '&:hover': {
                    cursor: 'not-allowed',
                },
            },
            readOnly && {
                cursor: 'text',
            },
        ],
        label: [
            {
                position: 'absolute',
                transformOrigin: 'left top',
                top: 14,
                maxWidth: 'calc(100% - 8px)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                transition: transitions.create(['transform', 'max-width'], {
                    duration: transitions.duration.shortest,
                }),

                color: palette.text.secondary,
            },
            typography.Text.L.Regular,
            filled && {
                transform: 'translateY(-9px) scale(0.875)',
            },
            filled && size === 'large' && {
                transform: 'translateY(-9px) scale(0.7)',
                maxWidth: 'calc(100% / 0.7 - 8px)',
            },
            multiline && filled && {
                transform: 'translateY(-9px) scale(0.875)',
                maxWidth: 'calc(100% / 0.875 - 8px)',
            },
            paramsToCss(size)({
                small: {
                    position: 'unset',
                    marginBottom: 8,
                    transform: 'none',
                    whiteSpace: 'unset',
                    maxWidth: '100%',
                    color: palette.text.main,
                    ...typography.Text.L.Medium,
                },
                medium: { ...filled && {
                    maxWidth: 'calc(100% / 0.875 - 8px)',
                } },
                large: {
                    top: 16,
                    ...typography.Text.XL.Regular,
                },
            }),
            disabled && {
                color: palette.text.secondary,
                cursor: 'not-allowed',
            },
        ],
        requiredSymbol: [
            {
                marginLeft: 1,
                color: palette.colors.danger.default,
            },
            size === 'small' && typography.Text.L.Semibold,
            disabled && {
                color: palette.text.secondary,
            },
        ],
        input: [
            {
                backgroundColor: 'transparent',
                boxSizing: 'border-box',
                border: 'none',
                width: '100%',
                padding: 0,
                margin: 0,
                cursor: 'pointer',
                color: palette.text.main,

                '&:focus': {
                    outline: 'none',
                },

                '&[type="search"]::-webkit-search-cancel-button': {
                    display: 'none',
                },

                '&::placeholder': {
                    visibility: 'hidden',
                    opacity: 0, // firefox
                    color: palette.text.tertiary,

                    ...(filled || size === 'small' || disableLabel) && {
                        visibility: 'visible',
                        opacity: 1,
                    },
                },
            },
            typography.Text.L.Regular,
            size === 'large' && typography.Text.XL.Regular,
            multiline && {
                resize: 'none',
            },
            filled && {
                cursor: 'text',
            },
            readOnly && {
                cursor: 'text',
            },
            disabled && {
                color: palette.text.secondary,
                cursor: 'not-allowed',
            },
        ],
        sideItem: [
            {
                color: palette.text.main,
            },
            vertCenter,
            loading && hidden,
            disabled && {
                color: palette.disabled.secondary,
            },

            multiline && paramsToCss(size)({
                small: {
                    paddingTop: 8,
                },
                medium: {
                    paddingTop: 14,
                },
                large: {
                    paddingTop: 18,
                },
            }),

            multiline && {
                alignItems: 'flex-start',
                alignSelf: 'flex-start',
            },
        ],
        leftItem: [
            paramsToCss(size)({
                small: {
                    marginLeft: -6,
                    marginRight: 4,
                },
                medium: {
                    marginLeft: -2,
                    marginRight: 4,
                },
                large: {
                    marginLeft: 2,
                    marginRight: 8,
                },
            }),
        ],
        rightItem: [
            paramsToCss(size)({
                small: {
                    marginRight: -6,
                    marginLeft: 4,
                },
                medium: {
                    marginRight: -2,
                    marginLeft: 4,
                },
                large: {
                    marginRight: 2,
                    marginLeft: 8,
                },
            }),
        ],
        rightIcon: vertCenter,
        closeIcon: [
            {
                color: palette.text.tertiary,
                width: 0,
                opacity: 0,
                marginRight: 0,
                cursor: 'pointer',
                transition: transitions.create(['margin', 'opacity', 'width', 'color'], {
                    duration: transitions.duration.shortest,
                }),
                animationDuration: `${transitions.duration.standard}ms`,
                animationTimingFunction: transitions.easing.easeOut,
                animationFillMode: 'forwards',
            },
            vertCenter,
            focused && clearIconVisibleOn === 'interact' && visibleClearIcon,

            clearIconVisibleOn === 'always' && !readOnly && {
                pointerEvents: hasValue ? 'auto' : 'none',
                width: 24,
                marginRight: rightItemIsExist ? 8 : 0,
                opacity: hasValue ? 1 : 0,
            },
        ],
        bottom: [
            {
                display: 'flex',
                justifyContent: 'space-between',
                color: palette.text.secondary,
                transition: transitions.create(['color', 'height', 'padding'], {
                    duration: transitions.duration.shortest,
                }),
                width: '100%',
                height: 0,
                padding: 0,
            },
            bottomIsVisible && {
                height: size === 'large' ? 24 : 20,
                paddingTop: size === 'large' ? 6 : 8,
            },
            disabled && {
                color: palette.text.tertiary,
            },
            bottomIsAbsolute && {
                position: 'absolute',
                bottom: 0,
                transform: 'translateY(100%)',
            },
        ],
        bottomText: [
            {
                marginLeft: 4,

                '& svg': {
                    alignSelf: 'flex-start',
                    marginTop: size === 'large' ? 4 : 2,
                    minWidth: 16,
                    minHeight: 16,
                },
            },
            error && {
                color: palette.colors.danger.default,
            },
            size === 'large'
                ? typography.Text.L.Regular
                : typography.Text.M.Regular,
            vertCenter,
        ],
        errorText: {
            marginLeft: 4,
        },
        length: [
            error && overflowed && {
                ...typography.Text.M.Semibold,
                color: palette.colors.danger.press,
            },
        ],
        counterSlash: [
            error && overflowed && {
                color: palette.colors.danger.alpha.middle,
            },
        ],
        counterText: [
            {
                opacity: counterVisibleOn === 'always' || filled ? 1 : 0,
                marginRight: 4,
                marginLeft: 6,
                whiteSpace: 'nowrap',
                transition: transitions.create('opacity', {
                    duration: transitions.duration.shortest,
                }),
            },
            counterVisibleOn === 'focus' && focused && {
                opacity: 1,
            },
            typography.Text.M.Regular,
            error && overflowed && {
                color: palette.colors.danger.default,
            },
        ],
        loader: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
        },

    });
}, { name: 'QxTextField' });

export type TextFieldStyleKeys = KeysFromUseStyles<typeof useStyles>;

export * from './types';
export * from './vars';
