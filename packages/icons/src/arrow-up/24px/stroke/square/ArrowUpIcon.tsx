import React, { forwardRef } from 'react';

export const ArrowUpIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M12.9979 5.8884C12.9979 5.79933 13.1055 5.7547 13.1684 5.81766L16.4676 9.11584C16.6238 9.27198 16.877 9.27188 17.033 9.11562L17.8811 8.26653C18.037 8.11035 18.037 7.85727 17.8811 7.70108L12.3167 2.12901C12.141 1.95308 11.856 1.95309 11.6803 2.12904L6.115 7.70292C5.95905 7.85911 5.95907 8.11218 6.11504 8.26835L6.96305 9.11742C7.11914 9.2737 7.3723 9.27378 7.52849 9.11761L10.8282 5.81801C10.8912 5.75504 10.9988 5.79967 10.9988 5.88874L10.9988 21.6004C10.9988 21.8213 11.1778 22.0004 11.3986 22.0004H12.5981C12.8189 22.0004 12.9979 21.8213 12.9979 21.6004L12.9979 5.8884Z" fill="currentColor" />
    </svg>
));
