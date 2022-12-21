import { forwardRef } from 'react';

export const MagnifyingGlassIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.3162 12.3768C11.0893 12.15 10.9759 12.0365 10.8414 12.0188C10.7069 12.001 10.5518 12.0904 10.2416 12.2691C9.43449 12.734 8.4983 13 7.5 13C4.46243 13 2 10.5376 2 7.5C2 4.46243 4.46243 2 7.5 2C10.5376 2 13 4.46243 13 7.5C13 8.4983 12.734 9.43449 12.2691 10.2416C12.0904 10.5518 12.001 10.7069 12.0188 10.8414C12.0365 10.9759 12.15 11.0893 12.3768 11.3162L14.7803 13.7197C15.0732 14.0126 15.0732 14.4874 14.7803 14.7803C14.4874 15.0732 14.0126 15.0732 13.7197 14.7803L11.3162 12.3768ZM11.5 7.5C11.5 9.70914 9.70914 11.5 7.5 11.5C5.29086 11.5 3.5 9.70914 3.5 7.5C3.5 5.29086 5.29086 3.5 7.5 3.5C9.70914 3.5 11.5 5.29086 11.5 7.5Z" fill="currentColor" />
    </svg>
));
