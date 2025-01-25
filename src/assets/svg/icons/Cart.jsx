import { forwardRef } from "react";

const Cart = forwardRef((props, ref) => {
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
        d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
      ></path>
    </svg>
  );
});

Cart.displayName = "cart";

const CartOutline = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 31 31"
      ref={ref}
      {...props}
    >
      <path
        d="M9.98706 19.4563H26.4586C26.6559 19.4563 26.8478 19.392 27.0054 19.2732C27.1629 19.1544 27.2775 18.9876 27.3318 18.7979L30.9649 6.08312C31.0036 5.94794 31.0104 5.80561 30.9847 5.66736C30.959 5.52911 30.9016 5.39871 30.817 5.28643C30.7323 5.17415 30.6228 5.08306 30.4969 5.02033C30.3711 4.9576 30.2324 4.92495 30.0917 4.92494H7.8925L7.24392 2.00351C7.19917 1.80158 7.08684 1.62097 6.92551 1.49155C6.76418 1.36213 6.56351 1.29164 6.35668 1.29175H0.908298C0.667402 1.29175 0.436373 1.38744 0.266034 1.55778C0.0956954 1.72812 0 1.95915 0 2.20005C0 2.44094 0.0956954 2.67197 0.266034 2.84231C0.436373 3.01265 0.667402 3.10834 0.908298 3.10834H5.62808L8.90749 17.8573C8.33344 18.1069 7.86284 18.5466 7.5748 19.1023C7.28676 19.6581 7.19886 20.2961 7.32586 20.909C7.45287 21.522 7.78704 22.0725 8.27219 22.4681C8.75735 22.8636 9.3639 23.0801 9.98987 23.0811H26.4586C26.6995 23.0811 26.9305 22.9854 27.1008 22.815C27.2712 22.6447 27.3669 22.4137 27.3669 22.1728C27.3669 21.9319 27.2712 21.7008 27.1008 21.5305C26.9305 21.3602 26.6995 21.2645 26.4586 21.2645H9.98987C9.74898 21.2645 9.51795 21.1688 9.34761 20.9984C9.17727 20.8281 9.08157 20.5971 9.08157 20.3562C9.08157 20.1153 9.17727 19.8842 9.34761 19.7139C9.51795 19.5436 9.74898 19.4479 9.98987 19.4479L9.98706 19.4563ZM28.8872 6.74153L25.7735 17.6397H10.7185L8.29681 6.74153H28.8872Z"
        fill="currentColor"
      />
      <path
        d="M9.08203 25.813C9.08203 26.352 9.24184 26.8788 9.54126 27.3269C9.84067 27.775 10.2662 28.1243 10.7642 28.3305C11.2621 28.5367 11.8099 28.5907 12.3385 28.4856C12.8671 28.3804 13.3526 28.1209 13.7337 27.7398C14.1148 27.3588 14.3743 26.8732 14.4795 26.3446C14.5846 25.8161 14.5306 25.2682 14.3244 24.7703C14.1182 24.2723 13.7689 23.8468 13.3208 23.5474C12.8727 23.2479 12.3458 23.0881 11.8069 23.0881C11.0845 23.0889 10.3918 23.3762 9.88096 23.8871C9.3701 24.3979 9.08277 25.0906 9.08203 25.813ZM11.8069 24.9047C11.9866 24.9047 12.1622 24.958 12.3116 25.0578C12.4609 25.1576 12.5773 25.2994 12.6461 25.4654C12.7148 25.6314 12.7328 25.814 12.6978 25.9902C12.6627 26.1664 12.5762 26.3283 12.4492 26.4553C12.3222 26.5823 12.1603 26.6688 11.9841 26.7039C11.8079 26.7389 11.6253 26.7209 11.4593 26.6522C11.2934 26.5834 11.1515 26.467 11.0517 26.3176C10.9519 26.1683 10.8986 25.9927 10.8986 25.813C10.899 25.5723 10.9948 25.3414 11.1651 25.1712C11.3353 25.0009 11.5661 24.9051 11.8069 24.9047Z"
        fill="currentColor"
      />
      <path
        d="M21.918 25.813C21.918 26.352 22.0778 26.8788 22.3772 27.3269C22.6766 27.775 23.1022 28.1243 23.6001 28.3305C24.098 28.5367 24.6459 28.5907 25.1745 28.4856C25.703 28.3804 26.1886 28.1209 26.5697 27.7398C26.9508 27.3588 27.2102 26.8732 27.3154 26.3446C27.4205 25.8161 27.3666 25.2682 27.1603 24.7703C26.9541 24.2723 26.6048 23.8468 26.1567 23.5474C25.7086 23.2479 25.1818 23.0881 24.6429 23.0881C23.9204 23.0889 23.2277 23.3762 22.7169 23.8871C22.206 24.3979 21.9187 25.0906 21.918 25.813ZM24.6429 24.9047C24.8225 24.9047 24.9981 24.958 25.1475 25.0578C25.2968 25.1576 25.4133 25.2994 25.482 25.4654C25.5508 25.6314 25.5687 25.814 25.5337 25.9902C25.4987 26.1664 25.4122 26.3283 25.2851 26.4553C25.1581 26.5823 24.9963 26.6688 24.8201 26.7039C24.6439 26.7389 24.4612 26.7209 24.2953 26.6522C24.1293 26.5834 23.9875 26.467 23.8876 26.3176C23.7878 26.1683 23.7346 25.9927 23.7346 25.813C23.7349 25.5723 23.8308 25.3414 24.001 25.1712C24.1713 25.0009 24.4021 24.9051 24.6429 24.9047Z"
        fill="currentColor"
      />
    </svg>
  );
});

CartOutline.displayName = "CartOutline";

export { Cart, CartOutline };