import { IconBaseProps } from './index';
const HeaderIcon = ({ size = 463, ...reset }: IconBaseProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...reset}
  >
    <circle cx="231.5" cy="231.5" r="231.5" fill="#2B5049" />
    <path
      d="M243.561 246H69V397.337L93.8873 375.76L243.561 246Z"
      fill="#63CA2E"
    />
    <path
      d="M394.074 245.735L394.074 65.9288L217.265 65.9288L242.473 91.5638L394.074 245.735Z"
      fill="#63CA2E"
    />
    <rect
      x="244.236"
      y="245.735"
      width="149.838"
      height="147.591"
      fill="white"
    />
    <circle cx="145.343" cy="140.099" r="105.636" fill="#F4A914" />
  </svg>
);

export default HeaderIcon;
