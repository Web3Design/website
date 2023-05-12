import { IconBaseProps } from './index';
const DeboxIcon = ({ size = 50, ...reset }: IconBaseProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...reset}
  >
    <circle cx="25" cy="25" r="25" fill="#ACECAE" />
    <mask
      id="mask0_24_20"
      style={{
        maskType: 'alpha'
      }}
      maskUnits="userSpaceOnUse"
      x="11"
      y="13"
      width="28"
      height="29"
    >
      <path d="M11 13H39V41.8485H11V13Z" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_24_20)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 18.6969C11 16.0191 13.1874 13.8484 15.8856 13.8484H34.4509C37.1491 13.8484 39.3365 16.0191 39.3365 18.6969V21.121H37.089C35.2542 21.121 33.7668 22.5971 33.7668 24.4179C33.7668 26.2388 35.2542 27.7149 37.089 27.7149H39.3365V30.3332C39.3365 33.0109 37.1491 35.1816 34.4509 35.1816H19.989L19.9895 35.1817L15.1039 37.606V35.1199C12.7772 34.7486 11 32.7468 11 30.3332V18.6969ZM39.3365 27.7149H41.1929C43.0277 27.7149 44.5152 26.2388 44.5152 24.4179C44.5152 22.5971 43.0277 21.121 41.1929 21.121H39.3365V27.7149Z"
        fill="white"
      />
      <path
        d="M39.6361 24.6667C39.6361 25.6039 38.8764 26.3637 37.9392 26.3637C37.0019 26.3637 36.2422 25.6039 36.2422 24.6667C36.2422 23.7295 37.0019 22.9697 37.9392 22.9697C38.8764 22.9697 39.6361 23.7295 39.6361 24.6667Z"
        fill="white"
      />
    </g>
  </svg>
);

export default DeboxIcon;
