import React, { forwardRef } from 'react';

export const ChevronRightIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M6.5003 9.75538C6.50034 10.3925 6.50036 10.711 6.64938 10.8579C6.73081 10.9381 6.83729 10.988 6.95106 10.9993C7.15927 11.0199 7.40415 10.8162 7.89391 10.4088L9.99612 8.65989C10.2924 8.4134 10.4406 8.29016 10.4818 8.13736C10.5048 8.05231 10.5049 7.9627 10.4821 7.87761C10.4411 7.72473 10.2932 7.60118 9.99743 7.3541L7.89501 5.59791C7.4049 5.18851 7.15985 4.98381 6.9514 5.00419C6.8375 5.01533 6.73086 5.0652 6.6493 5.14548C6.50004 5.29241 6.50006 5.61171 6.50009 6.25031L6.5003 9.75538Z" fill="currentColor" />
    </svg>
));
