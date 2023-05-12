import { IconBaseProps } from './index';
const TwitterOutlineIcon = ({ size = 74, ...reset }: IconBaseProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...reset}
  >
    <g clipPath="url(#clip0_20_633)">
      <path
        d="M66.4667 23.0524C66.4667 22.3583 66.4533 21.672 66.4227 20.9904C69.39 18.7793 71.9645 16.0116 74.0007 12.8445C71.2355 14.0888 68.2929 14.8938 65.2794 15.2306C68.4158 13.3004 70.8212 10.2136 71.9578 6.50923C69.0211 8.29028 65.7727 9.56357 62.3188 10.227C59.5513 7.07807 55.6021 5.07238 51.2362 4.99785C42.8514 4.85923 36.0543 11.9449 36.0543 20.8221C36.0543 22.0839 36.1862 23.3076 36.4482 24.4893C23.8217 23.6767 12.633 17.1044 5.14872 7.19659C3.8428 9.57036 3.09357 12.3446 3.09357 15.3176C3.09357 20.9407 5.77395 25.9385 9.84654 28.8877C7.35333 28.7749 5.0178 28.0198 2.9693 26.7817V26.9882C2.9693 34.8473 8.20424 41.432 15.1504 42.9683C13.877 43.3305 12.5338 43.519 11.1525 43.5122C10.1927 43.5073 9.23605 43.4025 8.29796 43.1996C10.2281 49.64 15.8376 54.3452 22.4787 54.502C17.2811 58.8116 10.7337 61.3859 3.62521 61.3679C2.39955 61.3679 1.18839 61.2857 0.000976562 61.1366C6.72249 65.7472 14.7011 68.4326 23.2781 68.4326C51.1979 68.4392 66.4667 44.1375 66.4667 23.0524Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_20_633">
        <rect width="74" height="74" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default TwitterOutlineIcon;
