import React, { forwardRef } from 'react';

export const TrashBinIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M2 6.5C2 6.22386 2.22386 6 2.5 6L21.4998 6C21.7759 6 21.9998 6.22386 21.9998 6.5V7.9C21.9998 8.17614 21.7759 8.4 21.4998 8.4H19.5938C19.4885 8.4 19.4012 8.48164 19.3942 8.5867L18.5311 21.5331C18.5136 21.7957 18.2955 21.9998 18.0322 21.9998H5.96778C5.70454 21.9998 5.48639 21.7957 5.46888 21.5331L4.60579 8.58669C4.59879 8.48164 4.51153 8.4 4.40624 8.4L2.5 8.4C2.22386 8.4 2 8.17614 2 7.9L2 6.5ZM10.6005 10.2998C10.8214 10.2999 11.0005 10.479 11.0004 10.6999L11.0001 17.2999C11.0001 17.5208 10.821 17.6999 10.6001 17.6998L9.0001 17.6998C8.77918 17.6998 8.60011 17.5207 8.60012 17.2997L8.60044 10.6997C8.60045 10.4788 8.77954 10.2998 9.00046 10.2998L10.6005 10.2998ZM15 10.2998C15.2209 10.2998 15.4 10.4789 15.4 10.6998L15.4001 17.2998C15.4001 17.5207 15.221 17.6998 15.0001 17.6998L13.4001 17.6998C13.1792 17.6998 13.0001 17.5207 13.0001 17.2998L13 10.6998C13 10.4789 13.1791 10.2998 13.4 10.2998L15 10.2998Z" fill="currentColor" />
        <path d="M15.2697 2.41781C15.2295 2.17671 15.0209 2 14.7765 2L9.22361 2C8.97919 2 8.7706 2.1767 8.73041 2.41779L8.49705 3.81779C8.44625 4.12256 8.68127 4.4 8.99024 4.4L15.0098 4.4C15.3187 4.4 15.5538 4.12257 15.503 3.81781L15.2697 2.41781Z" fill="currentColor" />
    </svg>
));
