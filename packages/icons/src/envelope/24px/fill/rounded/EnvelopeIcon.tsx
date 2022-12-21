import { forwardRef } from 'react';

export const EnvelopeIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M22 6.69559C22 6.04862 22 5.72513 21.9258 5.46045C21.7375 4.78802 21.212 4.26254 20.5396 4.07415C20.2749 4 19.9514 4 19.3044 4H4.69561C4.04862 4 3.72512 4 3.46044 4.07416C2.78802 4.26255 2.26255 4.78802 2.07416 5.46044C2 5.72512 2 6.04862 2 6.69561C2 6.85649 2 6.93693 2.01399 7.01075C2.04922 7.19667 2.14921 7.36409 2.29621 7.48326C2.35457 7.53057 2.4254 7.5687 2.56705 7.64498L9.15538 11.1925C10.5475 11.9422 11.2436 12.317 12 12.317C12.7563 12.317 13.4524 11.9422 14.8446 11.1925L21.433 7.64495C21.5746 7.56868 21.6454 7.53054 21.7038 7.48324C21.8508 7.36407 21.9508 7.19665 21.986 7.01072C22 6.93691 22 6.85647 22 6.69559Z" fill="currentColor" />
        <path d="M22 11.955C22 10.9089 22 10.3858 21.659 10.1821C21.3179 9.97841 20.8574 10.2264 19.9363 10.7224L14.8446 13.4641C13.4524 14.2137 12.7563 14.5885 12 14.5885C11.2436 14.5885 10.5475 14.2137 9.15538 13.4641L4.06374 10.7224C3.14265 10.2264 2.6821 9.97844 2.34105 10.1821C2 10.3859 2 10.9089 2 11.9551V14C2 16.8284 2 18.2426 2.87868 19.1213C3.75736 20 5.17157 20 8 20H16C18.8284 20 20.2426 20 21.1213 19.1213C22 18.2426 22 16.8284 22 14V11.955Z" fill="currentColor" />
    </svg>
));
