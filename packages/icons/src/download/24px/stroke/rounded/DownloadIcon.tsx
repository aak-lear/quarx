import React, { forwardRef } from 'react';

export const DownloadIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M5 16C5 15.4477 4.55229 15 4 15C3.44772 15 3 15.4477 3 16L3 16.6452C2.99998 17.2613 2.99996 17.7927 3.04133 18.2278C3.08513 18.6885 3.18226 19.1435 3.44208 19.5675C3.68945 19.9712 4.02884 20.3106 4.43251 20.5579C4.85651 20.8177 5.31153 20.9149 5.77219 20.9587C6.20736 21 6.73872 21 7.3548 21H16.6452C17.2613 21 17.7926 21 18.2278 20.9587C18.6885 20.9149 19.1435 20.8177 19.5675 20.5579C19.9712 20.3106 20.3106 19.9712 20.5579 19.5675C20.8178 19.1435 20.9149 18.6885 20.9587 18.2278C21 17.7926 21 17.2613 21 16.6452V16C21 15.4477 20.5523 15 20 15C19.4477 15 19 15.4477 19 16V16.6C19 17.274 18.9989 17.7094 18.9677 18.0385C18.9378 18.3528 18.8875 18.4656 18.8526 18.5225C18.7702 18.6571 18.6571 18.7702 18.5225 18.8526C18.4656 18.8875 18.3528 18.9378 18.0385 18.9677C17.7094 18.9989 17.2741 19 16.6 19H7.4C6.72595 19 6.29064 18.9989 5.9615 18.9677C5.64723 18.9378 5.53444 18.8875 5.4775 18.8526C5.34295 18.7702 5.22982 18.6571 5.14736 18.5225C5.11247 18.4656 5.06223 18.3528 5.03235 18.0385C5.00106 17.7094 5 17.274 5 16.6L5 16Z" fill="currentColor" />
        <path d="M8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L10.7781 12.3639C10.86 12.4458 11 12.3878 11 12.2719L11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4L13 12.2719C13 12.3878 13.14 12.4458 13.2219 12.3639L14.2929 11.2929C14.6834 10.9024 15.3166 10.9024 15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929Z" fill="currentColor" />
    </svg>
));
