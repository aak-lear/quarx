import React, { forwardRef } from 'react';

export const ArrowLeftCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.26825 10.6291C9.20525 10.6921 9.24987 10.7998 9.33896 10.7998L17.8 10.7998C18.4627 10.7998 19 11.3371 19 11.9998C19 12.6625 18.4627 13.1998 17.8 13.1998H9.33838C9.24929 13.1998 9.20468 13.3075 9.26767 13.3705L10.6574 14.7603C11.126 15.2289 11.126 15.9887 10.6574 16.4573C10.1888 16.9259 9.42898 16.9259 8.96035 16.4573L5.35167 12.8486C4.88304 12.38 4.88304 11.6202 5.35167 11.1516L8.96035 7.54288C9.42898 7.07425 10.1888 7.07425 10.6574 7.54288C11.126 8.01151 11.126 8.77131 10.6574 9.23993L9.26825 10.6291Z" fill="currentColor" />
    </svg>
));
