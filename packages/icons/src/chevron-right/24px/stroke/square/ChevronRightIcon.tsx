import React, { forwardRef } from 'react';

export const ChevronRightIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.91782 5.96569C8.76178 6.12189 8.76177 6.37513 8.91779 6.53135L14.3114 11.9315C14.3504 11.9706 14.3504 12.0339 14.3114 12.073L8.92068 17.4685C8.76462 17.6247 8.76461 17.878 8.92065 18.0342L9.76827 18.8828C9.92431 19.039 10.1773 19.039 10.3334 18.8828L16.8545 12.3559C17.0495 12.1606 17.0496 11.844 16.8545 11.6488L10.3306 5.11718C10.1746 4.96095 9.92155 4.96094 9.76549 5.11716L8.91782 5.96569Z" fill="currentColor" />
    </svg>
));
