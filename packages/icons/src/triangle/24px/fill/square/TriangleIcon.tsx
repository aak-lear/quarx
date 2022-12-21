import { forwardRef } from 'react';

export const TriangleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M18.6991 11.4803C19.099 11.7114 19.099 12.2873 18.6992 12.5185L5.90215 19.9188C5.50117 20.1507 4.99902 19.8621 4.99902 19.3997L4.99902 4.6009C4.99902 4.13858 5.50111 3.84996 5.90209 4.08178L18.6991 11.4803Z" fill="currentColor" />
    </svg>
));
