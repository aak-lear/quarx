import { forwardRef } from 'react';

export const BookOpenIcon = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref}>
        <path d="M19.2002 9.99983C19.2002 9.44755 18.7525 8.99983 18.2002 8.99983H15.8002C15.2479 8.99983 14.8002 9.44755 14.8002 9.99983C14.8002 10.5521 15.2479 10.9998 15.8002 10.9998H18.2002C18.7525 10.9998 19.2002 10.5521 19.2002 9.99983Z" fill="currentColor" />
        <path d="M18.2002 12.9998C18.7525 12.9998 19.2002 13.4475 19.2002 13.9998C19.2002 14.5521 18.7525 14.9998 18.2002 14.9998H15.8002C15.2479 14.9998 14.8002 14.5521 14.8002 13.9998C14.8002 13.4475 15.2479 12.9998 15.8002 12.9998H18.2002Z" fill="currentColor" />
        <path d="M9.19971 9.99983C9.19971 9.44755 8.75199 8.99983 8.19971 8.99983H5.79971C5.24742 8.99983 4.79971 9.44755 4.79971 9.99983C4.79971 10.5521 5.24742 10.9998 5.79971 10.9998H8.19971C8.75199 10.9998 9.19971 10.5521 9.19971 9.99983Z" fill="currentColor" />
        <path d="M8.19971 12.9998C8.75199 12.9998 9.19971 13.4475 9.19971 13.9998C9.19971 14.5521 8.75199 14.9998 8.19971 14.9998H5.79971C5.24742 14.9998 4.79971 14.5521 4.79971 13.9998C4.79971 13.4475 5.24742 12.9998 5.79971 12.9998H8.19971Z" fill="currentColor" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1 16.2912L1 6.67655C0.999961 6.14425 0.999923 5.66558 1.04341 5.27257C1.0904 4.84789 1.19809 4.40377 1.49787 4.00288C1.64116 3.81125 1.81123 3.64118 2.00286 3.49789C2.40375 3.19811 2.84787 3.09042 3.27255 3.04343C3.66556 2.99994 4.14423 2.99998 4.67653 3.00002L6.08054 3.00001C7.06888 2.99984 7.71321 2.99973 8.31797 3.12528C9.58662 3.38865 10.7359 4.05562 11.594 5.02645C11.7365 5.18769 11.8682 5.36068 12 5.55395C12.1318 5.36068 12.2635 5.18769 12.406 5.02645C13.2641 4.05562 14.4134 3.38865 15.682 3.12528C16.2868 2.99973 16.9311 2.99984 17.9195 3.00001L19.3235 3.00002C19.8558 2.99998 20.3345 2.99994 20.7275 3.04343C21.1521 3.09042 21.5963 3.19811 21.9972 3.49789C22.1888 3.64118 22.3588 3.81125 22.5021 4.00288C22.8019 4.40377 22.9096 4.84789 22.9566 5.27257C23.0001 5.66558 23.0001 6.14424 23 6.67655V16.2912C23.0001 16.8384 23.0001 17.3305 22.9543 17.7338C22.9047 18.1701 22.7909 18.6255 22.4754 19.0323C22.3469 19.198 22.198 19.3469 22.0323 19.4754C21.6255 19.7909 21.1701 19.9047 20.7338 19.9543C20.3305 20.0001 19.8384 20.0001 19.2912 20L16.2863 20C15.19 20 14.8731 20.0126 14.5948 20.1078C14.5155 20.135 14.438 20.1671 14.3627 20.2039C14.0986 20.3333 13.8656 20.5485 13.0903 21.3237L12.7071 21.707C12.6107 21.8033 12.4996 21.8759 12.381 21.9247C12.2636 21.9731 12.1349 21.9998 12 21.9998C11.7328 21.9998 11.4901 21.8951 11.3107 21.7243C11.304 21.718 11.2974 21.7115 11.2909 21.7049L10.9097 21.3237C10.1344 20.5485 9.90145 20.3333 9.63728 20.2039C9.56202 20.1671 9.48453 20.135 9.40524 20.1078C9.12694 20.0126 8.81006 20 7.7137 20L4.70882 20C4.16161 20.0001 3.66956 20.0001 3.26622 19.9543C2.82989 19.9047 2.37452 19.7909 1.96774 19.4754C1.80203 19.3469 1.65315 19.198 1.52462 19.0323C1.20909 18.6255 1.09532 18.1701 1.04574 17.7338C0.999919 17.3305 0.999959 16.8384 1 16.2912ZM13.4829 18.4079C13.3719 18.4622 13.2651 18.5229 13.1608 18.5895C13.0923 18.6333 13 18.5855 13 18.5041L13 9.36323C13 8.31655 13.1809 7.22034 13.8496 6.41513C13.8678 6.3932 13.886 6.37188 13.9045 6.35097C14.4766 5.70375 15.2428 5.25911 16.0886 5.08353C16.4669 5.00498 16.8925 5.00002 18.0311 5.00002H19.2737C19.8716 5.00002 20.2378 5.00146 20.5075 5.0313C20.6329 5.04517 20.7057 5.06241 20.7478 5.07623C20.7841 5.08813 20.7957 5.09682 20.7993 5.09951C20.8377 5.12817 20.8718 5.16227 20.9004 5.20059C20.9031 5.20419 20.9119 5.21592 20.9238 5.2522C20.9376 5.29433 20.9549 5.36714 20.9687 5.49253C20.9986 5.76221 21 6.12848 21 6.7263V16.24C21 16.8547 20.9985 17.2313 20.9671 17.508C20.9524 17.6367 20.9343 17.711 20.9199 17.7537C20.9074 17.7906 20.8983 17.8024 20.8951 17.8065C20.8694 17.8396 20.8396 17.8694 20.8064 17.8951C20.8023 17.8983 20.7906 17.9074 20.7537 17.9199C20.711 17.9343 20.6367 17.9524 20.508 17.9671C20.2313 17.9985 19.8546 18 19.24 18L16.1436 18C15.254 17.9994 14.58 17.9989 13.947 18.2157C13.7884 18.2699 13.6334 18.3341 13.4829 18.4079ZM11 9.36321C11 8.31654 10.8191 7.22032 10.1504 6.41511C10.1322 6.39319 10.114 6.37188 10.0955 6.35097C9.52342 5.70375 8.75721 5.25911 7.91144 5.08353C7.53309 5.00498 7.10754 5.00002 5.96888 5.00002H4.72628C4.12846 5.00002 3.76219 5.00146 3.49251 5.0313C3.36712 5.04517 3.29431 5.06241 3.25218 5.07623C3.2159 5.08813 3.20429 5.09682 3.20069 5.09951C3.16236 5.12817 3.12824 5.16227 3.09958 5.2006C3.09688 5.2042 3.08811 5.21593 3.07621 5.2522C3.06239 5.29433 3.04515 5.36714 3.03128 5.49253C3.00144 5.76221 3.00001 6.12848 3.00001 6.7263L3.00001 16.24C3.00001 16.8547 3.00152 17.2313 3.03296 17.508C3.04758 17.6367 3.06571 17.711 3.08015 17.7537C3.09261 17.7906 3.10169 17.8023 3.10489 17.8064C3.1306 17.8396 3.16041 17.8694 3.19355 17.8951C3.19767 17.8983 3.20944 17.9074 3.24629 17.9199C3.28902 17.9343 3.36334 17.9524 3.49199 17.9671C3.76875 17.9985 4.14536 18 4.76001 18L7.85638 18C8.746 17.9994 9.41998 17.9989 10.053 18.2157C10.2116 18.2699 10.3666 18.3341 10.5171 18.4079C10.6281 18.4622 10.7349 18.5229 10.8392 18.5895C10.9077 18.6333 11 18.5855 11 18.5041L11 9.36321Z" fill="currentColor" />
    </svg>
));
