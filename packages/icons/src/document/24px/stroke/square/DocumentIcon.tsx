import React, { forwardRef } from 'react';

export const DocumentIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M7 15L17 15V17L7 17V15Z" fill="currentColor" />
        <path d="M17 11L7 11V13L17 13L17 11Z" fill="currentColor" />
        <path d="M12 7L7 7L7 9L12 9L12 7Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21 22V2L3 2L3 22H21ZM5.11613 4.06295C5.19729 4 5.31553 4 5.552 4L18.448 4C18.6845 4 18.8027 4 18.8839 4.06295C18.9038 4.07838 18.9216 4.09624 18.937 4.11613C19 4.19729 19 4.31553 19 4.552V19.448C19 19.6845 19 19.8027 18.937 19.8839C18.9216 19.9038 18.9038 19.9216 18.8839 19.937C18.8027 20 18.6845 20 18.448 20H5.552C5.31553 20 5.19729 20 5.11613 19.937C5.09624 19.9216 5.07838 19.9038 5.06295 19.8839C5 19.8027 5 19.6845 5 19.448V4.552C5 4.31553 5 4.19729 5.06295 4.11613C5.07838 4.09624 5.09624 4.07838 5.11613 4.06295Z" fill="currentColor" />
    </svg>
));
