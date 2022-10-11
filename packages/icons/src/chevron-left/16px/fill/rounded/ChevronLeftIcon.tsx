import React, { forwardRef } from 'react';

export const ChevronLeftIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M9.4998 9.75257C9.49976 10.3897 9.49974 10.7082 9.35072 10.8551C9.26929 10.9353 9.16281 10.9852 9.04903 10.9965C8.84082 11.0171 8.59594 10.8134 8.10618 10.406L6.00397 8.65708C5.70768 8.41059 5.55953 8.28735 5.51827 8.13455C5.4953 8.0495 5.49521 7.95989 5.51801 7.8748C5.55897 7.72192 5.70687 7.59838 6.00266 7.35129L8.10508 5.5951C8.59519 5.18571 8.84025 4.98101 9.0487 5.00139C9.1626 5.01252 9.26923 5.06239 9.35079 5.14267C9.50006 5.2896 9.50004 5.6089 9.5 6.24751L9.4998 9.75257Z" fill="currentColor" />
    </svg>
));
