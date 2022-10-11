import React, { forwardRef } from 'react';

export const ArrowUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M8.53033 1.21967C8.23744 0.926777 7.76256 0.926777 7.46967 1.21967L4.21967 4.46967C3.92678 4.76256 3.92678 5.23744 4.21967 5.53033C4.51256 5.82322 4.98744 5.82322 5.28033 5.53033L6.91346 3.8972C7.05877 3.75189 7.13142 3.67924 7.19315 3.70481C7.25488 3.73038 7.25488 3.83313 7.25488 4.03862V14.25C7.25488 14.6642 7.59067 15 8.00488 15C8.4191 15 8.75488 14.6642 8.75488 14.25V4.04839C8.75488 3.84289 8.75488 3.74015 8.81661 3.71458C8.87835 3.68901 8.951 3.76166 9.0963 3.90696L10.7197 5.53033C11.0126 5.82322 11.4874 5.82322 11.7803 5.53033C12.0732 5.23744 12.0732 4.76256 11.7803 4.46967L8.53033 1.21967Z" fill="currentColor" />
    </svg>
));
