import { SWITCHER_POSITION, typography, KeysFromUseStyles, makeStyles, PALETTE_COLORS, cssVar } from '@core';
import { paramsToCss } from '@core/utils/paramsToCss';
import { SwitcherCSSVarKeys } from '@core/src/styled/Switcher/styles/vars';
import { baseFocusStyles, stylesWithFocus } from '@core/styles/mixins/focus';
import { SwitcherStyleParams } from './types';

export const useStyles = makeStyles((
    { palette, transitions },
    {
        size,
        checked,
        color = PALETTE_COLORS.brand,
        disabled,
        hover,
        position,
        disableFocus,
    }: SwitcherStyleParams,
    {
        cssFocusColor,
        cssFocusWidth,
        cssContentMargin,
        cssCheckedColor,
        cssHoverColor,
        cssToggleColor,
        cssDisabledColor,
        cssBorderWidth,
        cssTogglePosition,
        cssWidth,
        cssHeight,
        cssToggleHeight,
        cssToggleWidth,
    }: Record<SwitcherCSSVarKeys, string>,
) => {
    const brandOrSecondary = color === 'brand' || color === 'secondary';

    return {
        root: [
            {
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                cursor: 'pointer',

                [cssCheckedColor]: palette.colors[color].default,
                [cssHoverColor]: palette.colors[color].hover,
                [cssDisabledColor]: palette.disabled.border,
                [cssContentMargin]: '12px',
                [cssFocusWidth]: '2px',
                [cssTogglePosition]: '3px',
            },

            !brandOrSecondary && {
                [cssBorderWidth]: '2px',
                [cssToggleColor]: palette.colors[color].border,
            },

            brandOrSecondary && {
                [cssToggleColor]: palette.text.tertiary,
                [cssBorderWidth]: '1px',

                ...!checked && {
                    [cssHoverColor]: palette.text.tertiary,
                },
            },

            paramsToCss(size)({
                small: {
                    [cssWidth]: '26px',
                    [cssHeight]: '16px',
                    [cssToggleWidth]: '10px',
                    [cssToggleHeight]: '10px',
                },
                medium: {
                    [cssWidth]: '30px',
                    [cssHeight]: '18px',
                    [cssToggleWidth]: '12px',
                    [cssToggleHeight]: '12px',
                },
                large: {
                    [cssWidth]: '34px',
                    [cssHeight]: '20px',
                    [cssToggleWidth]: '14px',
                    [cssToggleHeight]: '14px',
                },
            }),

            disabled && {
                '&&': {
                    cursor: 'not-allowed',
                },
            },
        ],

        input: [
            {
                margin: 0,
                appearance: 'none',
            },
            !disableFocus && {
                '&:focus-visible + .QxSwitcher-toggleContainer': {
                    [cssFocusColor]: palette.border.focus.dark,

                    borderColor: 'transparent',

                    ...stylesWithFocus({
                        borderColor: cssVar(cssFocusColor),
                    }),
                },
            },
        ],

        toggleContainer: [
            {
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                boxSizing: 'border-box',
                borderStyle: 'solid',
                borderWidth: cssVar(cssBorderWidth),
                backgroundColor: 'transparent',
                margin: 0,
                padding: 0,
                borderRadius: 10,
                minWidth: cssVar(cssWidth),
                width: cssVar(cssWidth),
                height: cssVar(cssHeight),
                transition: transitions.create(['color', 'background-color', 'border-color', 'outline-color'], {
                    duration: transitions.duration.shortest,
                }),
            },

            baseFocusStyles({
                transitions,
                focusWidth: cssVar(cssFocusWidth),
                borderWidth: cssVar(cssBorderWidth),
            }),

            !brandOrSecondary && {
                borderColor: cssVar(cssCheckedColor),
            },

            brandOrSecondary && {
                borderColor: palette.border.secondary,
            },

            hover && {
                '&&': {
                    borderColor: cssVar(cssHoverColor),
                },
            },

            checked && {
                '&&': {
                    borderColor: cssVar(cssCheckedColor),
                    backgroundColor: cssVar(cssCheckedColor),
                },
            },

            checked && hover && {
                '&&': {
                    borderColor: cssVar(cssHoverColor),
                    backgroundColor: cssVar(cssHoverColor),
                },
            },

            disabled && {
                '&&': {
                    borderColor: cssVar(cssDisabledColor),
                    backgroundColor: 'transparent',
                },
            },

            disabled && checked && {
                '&&': {
                    [cssDisabledColor]: palette.disabled.bg,

                    backgroundColor: cssVar(cssDisabledColor),
                },
            },
        ],

        toggle: [
            {
                position: 'absolute',
                borderRadius: 10,
                transition: transitions.create(['background-color', 'border-color', 'left'], {
                    duration: transitions.duration.shortest,
                }),
                backgroundColor: cssVar(cssToggleColor),
                width: cssVar(cssToggleWidth),
                minWidth: cssVar(cssToggleWidth),
                height: cssVar(cssToggleHeight),
                left: `calc(${cssVar(cssTogglePosition)} - ${cssVar(cssBorderWidth)})`,
            },

            checked && {
                '&&': {
                    [cssToggleColor]: palette.colors[color].contrastText,

                    left: `calc(${cssVar(cssWidth)} - ${cssVar(cssToggleWidth)} - ${cssVar(cssTogglePosition)} - ${cssVar(cssBorderWidth)})`,
                },
            },

            disabled && {
                '&&': {
                    [cssToggleColor]: palette.disabled.border,
                },
            },

            disabled && checked && {
                '&&': {
                    [cssToggleColor]: palette.text.constant,
                },
            },
        ],

        content: [
            {
                color: palette.text.main,
            },
            paramsToCss(size)({
                small: typography.Text.M.Regular,
                medium: typography.Text.L.Regular,
                large: typography.Text.XL.Regular,
            }),
            paramsToCss(position)({
                [SWITCHER_POSITION.left]: { marginLeft: cssVar(cssContentMargin) },
                [SWITCHER_POSITION.right]: { marginRight: cssVar(cssContentMargin) },
            }),
        ],
    };
}, { name: 'QxSwitcher' });

export type SwitcherStyleKeys = KeysFromUseStyles<typeof useStyles>;
export * from './types';
export * from './vars';
