import { render, screen } from '@testing-library/react';
import React from 'react';
import { Counter, CounterProps } from '@core';
import { expectRootCn, testStyleParams } from '@core/test-utils';
import { CounterStyleParams } from '@quarx-ui/core/src/styled/Counter/styles';

describe('Counter', () => {
    it('Snapshot', () => {
        const { asFragment } = render(
            <Counter>
                99
            </Counter>,
        );
        expect(asFragment())
            .toMatchSnapshot();
    });

    testStyleParams<CounterStyleParams, CounterProps>(
        Counter,
        {
            color: 'brand',
            size: 'large',
            type: 'filled',
        },
        { children: '99' },
    )({
        color: ['brand', 'secondary', 'info', 'success', 'warning', 'danger', 'text'],
        size: ['small', 'medium', 'large'],
        type: ['filled', 'white', 'ghosted'],
    });

    it('className', () => {
        expectRootCn(Counter, 'QxCounter');
    });

    it('99+ should be in the document', () => {
        render(<Counter maxDigits={2}>999</Counter>);

        expect(screen.queryByText('99+')).toBeInTheDocument();
    });
});
