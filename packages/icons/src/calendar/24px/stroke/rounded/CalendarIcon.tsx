import { forwardRef } from 'react';

export const CalendarIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M14 16C14 15.4477 14.4477 15 15 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H15C14.4477 17 14 16.5523 14 16Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M8 3.4C8 3.68284 8 3.82426 8.08787 3.91213C8.17574 4 8.31716 4 8.6 4L15.4 4C15.6828 4 15.8243 4 15.9121 3.91213C16 3.82426 16 3.68284 16 3.4V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2L18 3.41263C18 3.68911 18 3.82735 18.0831 3.91432C18.1662 4.00129 18.3079 4.00774 18.5913 4.02065C18.8565 4.03272 19.1025 4.05185 19.3278 4.08215C19.9833 4.17028 20.6117 4.36902 21.1213 4.87868C21.631 5.38835 21.8297 6.0167 21.9179 6.67221C22.0001 7.28388 22.0001 8.0477 22 8.9342L22 14.0706C22 15.4247 22.0001 16.5413 21.8813 17.4251C21.7565 18.3529 21.4845 19.1723 20.8284 19.8284C20.1723 20.4845 19.3529 20.7565 18.4251 20.8813C17.5413 21.0001 16.4247 21 15.0705 21H8.92946C7.57533 21 6.4587 21.0001 5.57494 20.8813C4.64711 20.7565 3.82769 20.4845 3.17158 19.8284C2.51547 19.1723 2.2435 18.3529 2.11876 17.4251C1.99994 16.5413 1.99997 15.4247 2 14.0706L2 8.93418C1.99995 8.04769 1.99991 7.28387 2.08215 6.67221C2.17028 6.0167 2.36902 5.38835 2.87868 4.87869C3.38835 4.36902 4.0167 4.17028 4.67221 4.08215C4.89755 4.05185 5.14355 4.03272 5.40872 4.02065C5.69212 4.00774 5.83382 4.00129 5.91692 3.91432C6.00001 3.82735 6.00001 3.68911 6.00001 3.41263L6 2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2V3.4ZM4.2929 6.2929C4.36902 6.21677 4.50497 6.12263 4.93871 6.06431C5.40122 6.00213 6.02893 6.00001 7 6.00001L17 6.00001C17.9711 6.00001 18.5988 6.00213 19.0613 6.06431C19.495 6.12263 19.631 6.21677 19.7071 6.2929C19.7832 6.36902 19.8774 6.50497 19.9357 6.93871C19.9733 7.2187 19.989 7.55923 19.9955 7.99984C20.0023 8.46788 20.0058 8.7019 19.8589 8.85095C19.712 9.00001 19.4747 9.00001 19 9.00001H5C4.52533 9.00001 4.288 9.00001 4.14112 8.85095C3.99424 8.7019 3.99768 8.46788 4.00456 7.99984C4.01103 7.55923 4.02667 7.2187 4.06431 6.93871C4.12263 6.50497 4.21677 6.36902 4.2929 6.2929ZM5 11C4.5286 11 4.29289 11 4.14645 11.1464C4 11.2929 4 11.5286 4 12L4 14C4 15.4425 4.00213 16.4238 4.10092 17.1586C4.19585 17.8646 4.36322 18.1916 4.58579 18.4142C4.80836 18.6368 5.13538 18.8042 5.84144 18.8991C6.57626 18.9979 7.55752 19 9 19H15C16.4425 19 17.4238 18.9979 18.1586 18.8991C18.8646 18.8042 19.1916 18.6368 19.4142 18.4142C19.6368 18.1916 19.8042 17.8646 19.8991 17.1586C19.9979 16.4238 20 15.4425 20 14L20 12C20 11.5286 20 11.2929 19.8536 11.1464C19.7071 11 19.4714 11 19 11L5 11Z" fill="currentColor" />
    </svg>
));
