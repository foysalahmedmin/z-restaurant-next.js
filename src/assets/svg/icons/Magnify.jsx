import { forwardRef } from "react";

const Magnify = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023"
        clipRule="evenodd"
      ></path>
    </svg>
  );
});

Magnify.displayName = "Magnify";

const MagnifyOutline = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 2.75a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M1.25 11.5c0-5.66 4.59-10.25 10.25-10.25S21.75 5.84 21.75 11.5S17.16 21.75 11.5 21.75S1.25 17.16 1.25 11.5m18.22 7.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06"
        clipRule="evenodd"
      ></path>
    </svg>
  );
});

MagnifyOutline.displayName = "MagnifyOutline";

const MagnifyCart = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#clip0_234_12809)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.1203 44.1569C43.3338 44.9378 42.2702 45.3758 41.1618 45.3751C40.0534 45.3745 38.9903 44.9353 38.2047 44.1535L30.7422 36.6888L36.6892 30.7402L44.1517 38.2051C44.9343 38.9915 45.3737 40.0557 45.3739 41.1652C45.3741 42.2746 44.9351 43.339 44.1528 44.1257L44.149 44.1295L44.1203 44.1569Z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.2894 26.0196H12.0273L13.1406 15.1035H14.0158V15.7465C14.0158 16.0448 14.1343 16.331 14.3453 16.5419C14.5563 16.7529 14.8424 16.8715 15.1408 16.8715C15.4392 16.8715 15.7253 16.7529 15.9363 16.5419C16.1473 16.331 16.2658 16.0448 16.2658 15.7465V15.1035H20.049V15.7465C20.049 16.0448 20.1675 16.331 20.3785 16.5419C20.5895 16.7529 20.8756 16.8715 21.174 16.8715C21.4723 16.8715 21.7585 16.7529 21.9695 16.5419C22.1804 16.331 22.299 16.0448 22.299 15.7465V15.1035H23.1782L24.2894 26.0196Z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4789 15.4786H13.6403V15.7465C13.6403 16.1443 13.7984 16.5259 14.0797 16.8072C14.361 17.0885 14.7425 17.2465 15.1403 17.2465C15.5381 17.2465 15.9197 17.0885 16.201 16.8072C16.4823 16.5259 16.6403 16.1443 16.6403 15.7465V15.4786H19.6735V15.7465C19.6735 16.1443 19.8315 16.5259 20.1129 16.8072C20.3942 17.0885 20.7757 17.2465 21.1735 17.2465C21.5713 17.2465 21.9529 17.0885 22.2342 16.8072C22.5155 16.5259 22.6735 16.1443 22.6735 15.7465V15.4786H22.839L23.8737 25.6451H12.4421L13.4789 15.4786ZM16.6403 12.183C16.6403 11.7807 16.8001 11.395 17.0845 11.1106C17.3689 10.8262 17.7547 10.6664 18.1569 10.6664C18.5591 10.6664 18.9449 10.8262 19.2293 11.1106C19.5137 11.395 19.6735 11.7807 19.6735 12.183V12.4777H16.6403V12.183ZM11.5403 28.6451H24.7752C25.0811 28.6444 25.3834 28.5796 25.6627 28.455C25.942 28.3304 26.1922 28.1487 26.3971 27.9216C26.6019 27.6945 26.757 27.427 26.8523 27.1364C26.9475 26.8457 26.9809 26.5384 26.9502 26.234L25.7491 14.4467C25.6968 13.9068 25.445 13.4058 25.043 13.0417C24.6409 12.6776 24.1175 12.4766 23.5751 12.4779H22.6736V12.1832C22.6736 10.9853 22.1977 9.83642 21.3507 8.98938C20.5037 8.14234 19.3548 7.66647 18.1569 7.66647C16.959 7.66647 15.8102 8.14234 14.9631 8.98938C14.1161 9.83642 13.6402 10.9853 13.6402 12.1832V12.4779H12.7442C12.2017 12.4767 11.6782 12.6777 11.276 13.0418C10.8738 13.4058 10.6218 13.9067 10.5692 14.4467L9.36598 26.234C9.33513 26.5383 9.36836 26.8457 9.46353 27.1364C9.55869 27.4271 9.71368 27.6946 9.91852 27.9217C10.1234 28.1488 10.3735 28.3306 10.6528 28.4551C10.9321 28.5797 11.2345 28.6444 11.5403 28.6451ZM7.43988 7.43482C6.02402 8.84048 4.89957 10.5118 4.13104 12.353C3.36251 14.1942 2.96501 16.169 2.96134 18.1641C2.95767 20.1592 3.34791 22.1355 4.10967 23.9794C4.87142 25.8234 5.98971 27.4989 7.40041 28.9098C8.8111 30.3206 10.4864 31.4391 12.3303 32.2011C14.1742 32.9631 16.1504 33.3535 18.1455 33.3501C20.1407 33.3467 22.1155 32.9494 23.9568 32.1811C25.798 31.4128 27.4695 30.2885 28.8754 28.8728C31.7015 26.0268 33.2845 22.1767 33.2776 18.1659C33.2707 14.155 31.6745 10.3104 28.8385 7.47416C26.0026 4.63789 22.1582 3.0412 18.1473 3.03383C14.1365 3.02645 10.2862 4.609 7.43988 7.43482ZM32.8403 30.8753L30.8793 32.8376L29.9793 31.9401C30.3289 31.6388 30.6682 31.324 30.9973 30.9959C31.3261 30.6678 31.6402 30.3261 31.9415 29.9778L32.8404 30.8753H32.8403ZM43.8875 38.4701C44.6 39.1863 45 40.1555 45 41.1657C45 42.176 44.6 43.1452 43.8875 43.8614L43.8594 43.8882C43.1435 44.6002 42.1748 45 41.1651 45C40.1554 45 39.1867 44.6002 38.4708 43.8882L31.2731 36.6882L36.6899 31.27L43.8875 38.4701ZM31.0459 36.9163L31.048 36.9096C31.0466 36.9163 31.0466 36.9163 31.0459 36.9163ZM18.1582 36.3135C21.4567 36.3208 24.6942 35.4244 27.5192 33.7217L28.7648 34.9673C28.3353 35.4814 28.1136 36.1375 28.1433 36.8067C28.1729 37.4759 28.4517 38.1098 28.9249 38.5839L36.3499 46.0045C36.9821 46.6372 37.7328 47.1392 38.559 47.4816C39.3853 47.8241 40.2709 48.0004 41.1653 48.0004C42.0597 48.0004 42.9454 47.8241 43.7716 47.4816C44.5979 47.1392 45.3485 46.6372 45.9807 46.0045L46.0088 45.9778C47.2835 44.6993 47.9992 42.9677 47.9992 41.1624C47.9992 39.3571 47.2835 37.6255 46.0088 36.347L38.5838 28.9197C38.1089 28.448 37.4749 28.1707 36.8061 28.1422C36.1373 28.1137 35.482 28.336 34.9686 28.7656L33.7229 27.5199C36.0069 23.7202 36.8221 19.2163 36.015 14.8571C35.208 10.4979 32.8343 6.58445 29.3414 3.85432C25.8484 1.12418 21.4775 -0.234052 17.0524 0.0356001C12.6273 0.305253 8.45371 2.18417 5.31813 5.31822C2.77874 7.85753 1.04941 11.0929 0.34884 14.6151C-0.351726 18.1372 0.00794372 21.7881 1.38236 25.1058C2.75678 28.4236 5.08421 31.2593 8.07031 33.2542C11.0564 35.2492 14.567 36.3138 18.1582 36.3135Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_234_12809">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

MagnifyCart.displayName = "MagnifyCart";

export { Magnify, MagnifyCart, MagnifyOutline };