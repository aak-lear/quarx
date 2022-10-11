import React, { forwardRef } from 'react';

export const PageWithImageTextIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path fillRule="evenodd" clipRule="evenodd" d="M2 16.0658L2 7.93418C1.99995 7.04769 1.99991 6.28388 2.08215 5.67222C2.17028 5.0167 2.36902 4.38835 2.87868 3.87869C3.38835 3.36902 4.0167 3.17028 4.67221 3.08215C5.28388 2.99991 6.0477 2.99995 6.9342 3L17.0658 3C17.9523 2.99995 18.7161 2.99991 19.3278 3.08215C19.9833 3.17028 20.6117 3.36902 21.1213 3.87869C21.631 4.38835 21.8297 5.0167 21.9179 5.67222C22.0001 6.28388 22.0001 7.0477 22 7.9342V16.0658C22.0001 16.9523 22.0001 17.7161 21.9179 18.3278C21.8297 18.9833 21.631 19.6117 21.1213 20.1213C20.6117 20.631 19.9833 20.8297 19.3278 20.9179C18.7161 21.0001 17.9523 21.0001 17.0658 21H6.93418C6.04769 21.0001 5.28387 21.0001 4.67221 20.9179C4.0167 20.8297 3.38835 20.631 2.87868 20.1213C2.36902 19.6117 2.17028 18.9833 2.08215 18.3278C1.99991 17.7161 1.99995 16.9523 2 16.0658ZM17.5021 7.49781C17.1828 7.17853 16.8029 7.07497 16.5014 7.03443C16.2427 6.99966 15.9354 6.99977 15.647 6.99988L8.35302 6.99988C8.06464 6.99977 7.75732 6.99966 7.49868 7.03444C7.19718 7.07497 6.81722 7.17853 6.49794 7.49781C6.17866 7.81709 6.07511 8.19704 6.03457 8.49855C5.9998 8.75719 5.99991 9.06451 6.00001 9.35289V10.6469C5.99991 10.9353 5.9998 11.2426 6.03457 11.5012C6.07511 11.8027 6.17866 12.1827 6.49794 12.502C6.81722 12.8213 7.19718 12.9248 7.49868 12.9653C7.75732 13.0001 8.06464 13 8.35301 12.9999H15.647C15.9354 13 16.2427 13.0001 16.5014 12.9653C16.8029 12.9248 17.1828 12.8213 17.5021 12.502C17.8214 12.1827 17.9249 11.8027 17.9655 11.5012C18.0002 11.2426 18.0001 10.9353 18 10.6469V9.35288C18.0001 9.06452 18.0002 8.75717 17.9655 8.49855C17.9249 8.19704 17.8214 7.81709 17.5021 7.49781ZM6.7998 16.8C6.7998 16.1373 7.33706 15.6 7.9998 15.6L15.9998 15.6C16.6625 15.6 17.1998 16.1373 17.1998 16.8C17.1998 17.4628 16.6625 18 15.9998 18H7.9998C7.33706 18 6.7998 17.4628 6.7998 16.8Z" fill="currentColor" />
    </svg>
));
