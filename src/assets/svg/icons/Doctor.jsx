import { forwardRef } from "react";

const Doctor = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 87 86"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M26.3457 41.3748C27.0878 41.3748 27.6895 40.7731 27.6895 40.031V22.8444C27.6895 13.2118 35.5256 5.37565 45.1582 5.37565C54.532 5.17479 62.8285 13.4737 62.6268 22.8446C62.627 22.8444 62.627 43.5518 62.627 43.5518C62.627 44.2939 63.2286 44.8955 63.9707 44.8955C64.7128 44.8955 65.3145 44.2939 65.3145 43.5518V22.8444C65.5473 12.0344 55.9729 2.45374 45.158 2.6883C34.0441 2.68814 25.002 11.7302 25.002 22.8444V40.031C25.002 40.7731 25.6036 41.3748 26.3457 41.3748Z"
        fill="currentColor"
      />
      <path
        d="M59.4945 32.2272C55.0873 23.6769 47.5299 22.8301 43.0422 14.1712C42.4429 13.1723 42.5287 12.462 41.5233 12.1359C40.1228 11.9426 39.1779 13.5243 38.1578 14.2642C35.3608 16.9224 33.13 20.1755 31.5271 23.9325C29.678 27.7548 30.5277 32.568 31.3088 36.6515C34.0095 51.374 54.3661 52.5165 58.6626 38.0471C58.8725 38.6868 59.5326 39.0824 60.2104 38.942C60.9367 38.7918 61.4045 38.0812 61.2549 37.3542C60.879 35.5315 60.2871 33.8072 59.4945 32.2272ZM56.4199 35.8267C55.0872 44.7193 44.5229 48.7652 37.8166 42.9967C35.7716 41.2621 34.4016 38.8508 33.9593 36.2099L33.2383 31.8637C32.1712 25.4716 36.4124 19.5747 40.7326 15.553C45.0696 24.1484 52.4593 25.324 56.8864 33.0362L56.4199 35.8267Z"
        fill="currentColor"
      />
      <path
        d="M28.4211 68.2773C29.627 68.4004 30.7899 68.6726 32.0172 68.8948C33.554 68.914 33.8648 66.6253 32.3518 66.2499C31.4917 66.0281 30.6794 65.8844 29.8953 65.7683C30.5701 61.9292 30.6221 58.3723 30.1126 54.9451C30.9879 53.971 29.8737 52.3593 28.6374 52.8473C23.9442 54.5118 20.9628 56.1062 19.5272 57.7176C18.5384 58.8199 17.6979 60.3172 16.9578 62.2967C16.6181 63.1518 17.3012 64.1268 18.2163 64.1116C18.7608 64.1116 19.2726 63.7776 19.4747 63.2376C20.0869 61.6019 20.7771 60.3487 21.5303 59.5088C22.075 58.8975 23.5639 57.7056 27.5501 56.1244C27.942 59.4163 27.7822 62.8631 26.9926 66.6304C26.7885 67.5112 27.5556 68.2871 28.4211 68.2773Z"
        fill="currentColor"
      />
      <path
        d="M63.323 66.6284C62.7299 63.8162 62.4681 61.088 62.5449 58.5206C62.5672 57.7792 61.9839 57.1598 61.2418 57.1375C60.4899 57.0974 59.881 57.6985 59.8587 58.4405C59.7885 60.7836 59.9768 63.2421 60.4197 65.7655C59.1317 66.108 54.0272 66.3157 55.6994 68.9155C56.3234 69.6341 57.0071 70.4214 57.6692 71.3335C54.6573 73.3416 52.6987 76.8145 52.5253 80.443C51.541 80.49 50.5404 80.5302 49.5206 80.5598L55.3705 53.6634C56.8022 54.026 58.0457 54.5703 59.3607 54.826C60.842 54.8495 61.2241 52.6573 59.7779 52.204C57.3581 51.4131 54.4147 50.5798 51.7804 49.8958C51.0585 49.7769 49.7878 49.15 49.137 49.7449C46.8286 51.4692 43.4863 51.4692 41.1781 49.7449C40.8552 49.5028 40.4379 49.4175 40.0462 49.5179C39.1217 49.7666 37.3436 50.1868 36.4264 50.4535C34.7372 50.9513 35.4324 53.4896 37.1456 53.0426C37.9726 52.8098 39.2711 52.4888 40.1079 52.2716C43.1156 54.2111 47.1993 54.2111 50.207 52.2716C51.033 52.4754 51.9744 52.7227 52.7776 52.9411L51.8861 57.0397C48.4292 59.5647 43.0917 59.8145 39.3717 57.6347C38.7274 57.2687 37.9066 57.4937 37.5398 58.1387C37.173 58.7837 37.3987 59.6039 38.0437 59.9706C41.8817 62.2 47.0781 62.4035 51.1222 60.5525L46.7588 80.6142C45.6973 80.6293 44.6185 80.6282 43.5554 80.6094L41.1223 69.4025C40.9655 68.6774 40.2496 68.2168 39.5246 68.3743C38.7989 68.5318 38.339 69.247 38.4965 69.972L40.7927 80.55C39.7777 80.5211 38.7789 80.4849 37.7964 80.4385C37.7544 78.8674 36.4613 72.8431 34.0001 74.2386C33.3819 74.6495 33.2133 75.4834 33.624 76.1015C34.4769 77.3851 34.9726 78.838 35.091 80.2924C28.7315 79.8878 23.2477 79.18 19.3749 78.5718C16.9891 78.1487 16.945 75.9137 17.2814 73.908C17.356 73.1699 16.818 72.5105 16.0798 72.4351C14.392 72.2802 14.5368 74.4202 14.4435 75.5103C14.2295 78.291 16.215 80.8027 18.9609 81.2272C24.5288 82.159 35.7529 83.3701 45.1574 83.3129C54.7422 83.3861 66.8316 82.0107 71.3507 81.2277C74.0999 80.8027 76.0854 78.291 75.8715 75.5084C75.5834 71.8314 74.926 66.5889 73.4294 62.4941C73.1741 61.7973 72.3999 61.4403 71.7057 61.6929C71.0089 61.9482 70.65 62.7198 70.9046 63.4166C72.2975 67.226 72.9169 72.2087 73.1919 75.7163C73.3008 77.129 72.3323 78.3566 70.9361 78.5725C67.6176 79.0961 61.9892 79.8609 55.2202 80.2941C55.4771 77.2467 57.419 74.3048 60.1671 72.9967C62.0913 71.8999 59.7826 69.7992 59.0733 68.7457C60.5143 68.1872 63.5767 68.861 63.323 66.6284Z"
        fill="currentColor"
      />
      <path
        d="M11.0839 61.8427L18.4863 72.7377C20.0833 75.0997 22.7288 76.4861 25.541 76.4855C26.5309 76.5873 27.7595 76.1613 27.6275 74.9638C27.5507 74.2264 26.9005 73.6943 26.1519 73.7665C24.0089 73.985 21.9205 73.0191 20.7106 71.2299L13.3062 60.3309C10.575 56.3205 11.1526 50.952 14.506 47.6075C16.9141 49.5201 20.6972 47.6768 20.8736 44.6885C25.6248 44.302 30.0637 47.4616 31.2966 52.048L33.2991 59.3979C33.3042 59.4092 34.7629 64.7572 34.7629 64.7572C35.3068 66.7715 34.7327 68.942 33.2656 70.4202C32.7427 70.9471 32.7453 71.7981 33.2722 72.3204C33.7987 72.8435 34.6496 72.8404 35.1723 72.3138C37.3132 70.1571 38.1505 66.9933 37.3565 64.0525L33.8896 51.342C32.2925 45.3474 26.333 41.2975 20.1603 42.0551C19.5706 41.2033 18.6892 40.6385 17.7293 40.4264C18.1029 37.1436 19.9607 34.0213 23.1757 31.3327C24.5184 30.2013 22.804 28.1485 21.4513 29.2712C17.4842 32.5894 15.2908 36.5508 15.0177 40.7713C13.3126 41.6395 12.4764 43.5797 12.9485 45.3788C8.39498 49.592 7.53102 56.6251 11.0839 61.8427ZM18.0716 43.7959C18.7374 45.3054 16.625 46.4492 15.7129 45.1002C14.7232 43.4434 17.2244 42.1164 18.0716 43.7959Z"
        fill="currentColor"
      />
      <path
        d="M76.7768 41.6569C76.7768 36.6113 73.939 31.7953 68.7858 28.0954C68.1828 27.663 67.3423 27.8002 66.9106 28.4038C66.4782 29.0061 66.616 29.846 67.219 30.279C72.7346 34.3344 75.3158 39.4181 73.5088 45.1298C68.3764 42.5328 61.858 46.6205 61.9983 52.4071C61.9982 56.8529 65.6147 60.4694 70.0607 60.4694C77.1516 60.5642 80.8066 51.6097 75.7761 46.7272C76.4275 45.079 76.7768 43.3803 76.7768 41.6569ZM70.0607 57.7819C62.9574 57.5561 62.959 47.2567 70.0608 47.0319C77.164 47.2578 77.1623 57.5571 70.0607 57.7819Z"
        fill="currentColor"
      />
      <path
        d="M70.0606 48.3755C64.7449 48.5148 64.7459 56.2995 70.0607 56.438C75.3763 56.2986 75.3752 48.514 70.0606 48.3755ZM70.0606 53.7505C68.2948 53.7187 68.295 51.0945 70.0607 51.063C71.8264 51.0947 71.8261 53.719 70.0606 53.7505Z"
        fill="currentColor"
      />
    </svg>
  );
});
Doctor.displayName = "Doctor";

export { Doctor };