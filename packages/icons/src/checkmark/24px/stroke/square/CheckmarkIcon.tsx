import React, { forwardRef } from 'react';

export const CheckmarkIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.8799 8.46051C19.0359 8.61665 19.0357 8.86956 18.8793 9.02541L11.3169 16.5638C11.1411 16.739 10.8564 16.7389 10.6807 16.5635L7.11714 13.0043C6.96095 12.8483 6.96096 12.5954 7.11716 12.4394L7.96567 11.592C8.12189 11.436 8.37519 11.4361 8.53139 11.5921L10.8587 13.9167C10.9367 13.9946 11.0633 13.9947 11.1414 13.9168L17.4664 7.61186C17.6228 7.456 17.876 7.45623 18.0321 7.61237L18.8799 8.46051Z" fill="currentColor" />
    </svg>
));
