import { IconBaseProps } from './index';
const FigmaIcon = ({ size = 50, ...reset }: IconBaseProps) => (
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
      d="M24.9998 25.9998C24.9997 25.2556 25.142 24.5187 25.4183 23.8311C25.6947 23.1436 26.0998 22.5189 26.6105 21.9926C27.1212 21.4664 27.7276 21.0489 28.3949 20.7641C29.0622 20.4793 29.7774 20.3328 30.4997 20.3328C31.222 20.3328 31.9372 20.4793 32.6045 20.7641C33.2718 21.0489 33.8781 21.4664 34.3888 21.9926C34.8996 22.5189 35.3047 23.1436 35.581 23.8311C35.8574 24.5187 35.9996 25.2556 35.9996 25.9998C35.9995 27.5026 35.42 28.9438 34.3885 30.0064C33.3571 31.069 31.9583 31.6659 30.4997 31.6659C29.0411 31.6659 27.6422 31.069 26.6108 30.0064C25.5794 28.9438 24.9999 27.5026 24.9998 25.9998ZM14 37.333C14 35.8301 14.5795 34.3888 15.6109 33.3261C16.6423 32.2634 18.0412 31.6664 19.4999 31.6664H24.9998V37.333C24.9998 38.0772 24.8576 38.8141 24.5813 39.5016C24.3049 40.1892 23.8998 40.8139 23.3891 41.3401C22.8783 41.8664 22.272 42.2838 21.6047 42.5686C20.9374 42.8534 20.2222 43 19.4999 43C18.7776 43 18.0624 42.8534 17.3951 42.5686C16.7278 42.2838 16.1215 41.8664 15.6107 41.3401C15.1 40.8139 14.6949 40.1892 14.4185 39.5016C14.1422 38.8141 13.9999 38.0772 14 37.333ZM24.9998 9V20.3332H30.4997C31.222 20.3332 31.9372 20.1867 32.6045 19.902C33.2719 19.6172 33.8782 19.1998 34.389 18.6736C34.8997 18.1474 35.3049 17.5227 35.5813 16.8352C35.8577 16.1477 36 15.4108 36 14.6666C36 13.9224 35.8577 13.1855 35.5813 12.498C35.3049 11.8105 34.8997 11.1858 34.389 10.6596C33.8782 10.1334 33.2719 9.71597 32.6045 9.43122C31.9372 9.14647 31.222 8.99994 30.4997 9H24.9998ZM14 14.6666C14 16.1695 14.5795 17.6108 15.6109 18.6735C16.6423 19.7362 18.0412 20.3332 19.4999 20.3332H24.9998V9H19.4999C18.0412 9 16.6423 9.59701 15.6109 10.6597C14.5795 11.7224 14 13.1637 14 14.6666ZM14 25.9998C14 27.5027 14.5795 28.944 15.6109 30.0067C16.6423 31.0694 18.0412 31.6664 19.4999 31.6664H24.9998V20.3332H19.4999C18.0412 20.3332 16.6423 20.9302 15.6109 21.9929C14.5795 23.0556 14 24.4969 14 25.9998Z"
      fill="white"
    />
  </svg>
);

export default FigmaIcon;