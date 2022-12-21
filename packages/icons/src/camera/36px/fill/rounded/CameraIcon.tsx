import { forwardRef } from 'react';

export const CameraIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M29 21.2175C29 22.6887 29 23.4243 29.1894 24.0926C29.3998 24.8353 29.7793 25.5191 30.2982 26.0906C30.7651 26.6049 31.3893 26.9941 32.6377 27.7725C33.362 28.2241 33.7241 28.4499 34.0224 28.4432C34.3517 28.4359 34.6561 28.2669 34.8366 27.9914C35 27.7419 35 27.3151 35 26.4615V9.54935C35 8.69821 35 8.27264 34.8373 8.02345C34.6569 7.74717 34.3518 7.57769 34.0219 7.57049C33.7243 7.564 33.363 7.78887 32.6404 8.23862C31.3928 9.01514 30.7689 9.4034 30.302 9.91654C29.7808 10.4893 29.3998 11.1752 29.1889 11.9204C29 12.5879 29 13.3227 29 14.7923V21.2175Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3.17157 28.8279C4.34315 29.9995 6.22877 29.9995 10 29.9995H19C22.7712 29.9995 24.6569 29.9995 25.8284 28.8279C27 27.6564 27 25.7707 27 21.9995V13.9995C27 10.2283 27 8.34266 25.8284 7.17108C24.6569 5.99951 22.7712 5.99951 19 5.99951L10 5.99951C6.22877 5.99951 4.34315 5.99951 3.17157 7.17108C2 8.34266 2 10.2283 2 13.9995L2 21.9995C2 25.7707 2 27.6564 3.17157 28.8279ZM8 22.75C7.30965 22.75 6.75 23.3096 6.75 24C6.75 24.6904 7.30964 25.25 8 25.25H12C12.6904 25.25 13.25 24.6904 13.25 24C13.25 23.3096 12.6904 22.75 12 22.75H8Z" fill="currentColor" />
    </svg>
));
