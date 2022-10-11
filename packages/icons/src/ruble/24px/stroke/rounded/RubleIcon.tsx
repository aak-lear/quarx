import React, { forwardRef } from 'react';

export const RubleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M15 4L9.2 4C8.53726 4 8 4.53726 8 5.2L8 11.7C8 11.8657 7.86569 12 7.7 12H6C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14H7.7C7.86569 14 8 14.1343 8 14.3L8 15.7C8 15.8657 7.86569 16 7.7 16H6C5.44772 16 5 16.4477 5 17C5 17.5523 5.44772 18 6 18H7.7C7.86569 18 8 18.1343 8 18.3V20C8 20.5523 8.44772 21 9 21C9.55229 21 10 20.5523 10 20L10 18.3C10 18.1343 10.1343 18 10.3 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H10.3C10.1343 16 10 15.8657 10 15.7V14.3C10 14.1343 10.1343 14 10.3 14L15 14C17.7614 14 20 11.7614 20 9.00001C20 6.23858 17.7614 4 15 4ZM15 12H10.3C10.1343 12 10 11.8657 10 11.7L10 6.3C10 6.13431 10.1343 6 10.3 6L15 6C16.6569 6 18 7.34315 18 9.00001C18 10.6569 16.6569 12 15 12Z" fill="currentColor" />
    </svg>
));
