import React, { forwardRef } from 'react';

export const CheckmarkCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM11.5629 6.86568C11.8753 6.55326 11.8753 6.04673 11.5628 5.73431C11.2504 5.42189 10.7439 5.4219 10.4315 5.73432L7.61942 8.54643C7.48609 8.67977 7.41942 8.74643 7.33658 8.74643C7.25374 8.74644 7.18707 8.67977 7.05373 8.54644L6.36861 7.86133C6.05619 7.54891 5.54965 7.54892 5.23724 7.86134C4.92482 8.17376 4.92483 8.6803 5.23725 8.99271L6.34664 10.1021C6.81332 10.5687 7.04665 10.8021 7.3366 10.8021C7.62655 10.8021 7.85988 10.5687 8.32654 10.1021L11.5629 6.86568Z" fill="currentColor" />
    </svg>
));
