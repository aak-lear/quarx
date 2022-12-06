import { ChangeEventHandler, ReactNode, RefObject } from 'react';
import { ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { BaseProps } from '@core/types';
import { RadioButtonCSSVarKeys, RadioButtonStyleKeys, RadioButtonStyleParams } from './styles';

export interface RadioButtonPropsWithoutHtml extends
    Partial<RadioButtonStyleParams>,
    WithClassesAndStyles<RadioButtonStyleKeys, RadioButtonStyleParams, RadioButtonCSSVarKeys>,
    BaseProps<HTMLLabelElement>
{
    /** Дочерний элемент */
    children?: ReactNode,

    /** Объект со свойствами для элемента `input` */
    inputProps?: JSX.IntrinsicElements['input'],

    /** Ссылка к элементу `input` */
    inputRef?: RefObject<HTMLInputElement>,

    /** Обработчик изменения состояния элемента `input` */
    onChange?: ChangeEventHandler<HTMLInputElement>,

    /** Свойство `name` элемента `input` */
    name?: string,

    /** Свойство `value` элемента `input` */
    value?: string,
}

export type RadioButtonProps = ComponentPropsWithHTML<RadioButtonPropsWithoutHtml, 'label'>;

export * from './styles/types';
