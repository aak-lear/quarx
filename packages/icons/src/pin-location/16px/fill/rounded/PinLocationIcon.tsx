import React, { forwardRef } from 'react';

export const PinLocationIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <g clipPath="url(#clip0_1812_5)">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.0762 10.2002C13.6614 9.27399 14 8.17654 14 7C14 3.68629 11.3137 1 8 1C4.68629 1 2 3.68629 2 7C2 8.26002 2.3884 9.42932 3.05201 10.3947C3.56469 11.217 4.2392 11.9714 4.91503 12.7272C5.66911 13.5706 6.42482 14.4158 6.95918 15.3592C7.17445 15.7393 7.56321 16.0033 8 16.0033C8.43679 16.0033 8.82552 15.7392 9.04111 15.3594C9.57587 14.4171 10.3336 13.5727 11.0896 12.7304C11.822 11.9142 12.5527 11.0999 13.0774 10.2002H13.0762ZM10 7C10 8.10457 9.10457 9 8 9C6.89543 9 6 8.10457 6 7C6 5.89543 6.89543 5 8 5C9.10457 5 10 5.89543 10 7Z" fill="#02050A" />
        </g>
        <defs>
            <clipPath id="clip0_1812_5">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
));
