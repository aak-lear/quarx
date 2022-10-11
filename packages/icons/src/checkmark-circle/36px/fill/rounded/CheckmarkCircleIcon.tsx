import React, { forwardRef } from 'react';

export const CheckmarkCircleIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM25.5609 15.5568C26.1467 14.971 26.1467 14.0213 25.5609 13.4355C24.9752 12.8497 24.0254 12.8496 23.4396 13.4354L17.2136 19.6611C16.8803 19.9944 16.7136 20.161 16.5065 20.161C16.2994 20.161 16.1328 19.9944 15.7994 19.6611L14.5606 18.4223C13.9748 17.8366 13.0251 17.8366 12.4393 18.4224C11.8535 19.0082 11.8536 19.9579 12.4394 20.5437L15.4459 23.5501C16.0317 24.1358 16.9814 24.1358 17.5672 23.5501L25.5609 15.5568Z" fill="currentColor" />
    </svg>
));
