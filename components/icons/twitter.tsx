import { IconBaseProps } from './index';
const TwitterIcon = ({ size = 50, ...reset }: IconBaseProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...reset}
  >
    <circle cx="25" cy="25" r="25" fill="#ACECAE" />
    <path
      d="M37.0483 20.034C37.0483 19.762 37.0431 19.493 37.0311 19.2259C38.194 18.3594 39.2029 17.2748 40.0009 16.0336C38.9172 16.5212 37.764 16.8367 36.5831 16.9687C37.8122 16.2123 38.7548 15.0026 39.2003 13.5508C38.0494 14.2488 36.7764 14.7478 35.4228 15.0078C34.3383 13.7738 32.7906 12.9878 31.0796 12.9585C27.7937 12.9042 25.13 15.681 25.13 19.1599C25.13 19.6544 25.1817 20.134 25.2843 20.5971C20.3361 20.2787 15.9514 17.703 13.0183 13.8202C12.5066 14.7505 12.2129 15.8377 12.2129 17.0028C12.2129 19.2064 13.2634 21.165 14.8594 22.3208C13.8823 22.2766 12.967 21.9807 12.1642 21.4955V21.5764C12.1642 24.6563 14.2158 27.2368 16.9379 27.8389C16.4389 27.9808 15.9125 28.0547 15.3712 28.052C14.995 28.0501 14.6201 28.009 14.2525 27.9295C15.0089 30.4534 17.2072 32.2974 19.8098 32.3588C17.7729 34.0477 15.2071 35.0566 12.4213 35.0495C11.941 35.0495 11.4663 35.0173 11.001 34.9589C13.6351 36.7657 16.7618 37.8181 20.1231 37.8181C31.0646 37.8207 37.0483 28.297 37.0483 20.034Z"
      fill="white"
    />
  </svg>
);

export default TwitterIcon;