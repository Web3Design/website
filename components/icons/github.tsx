import { IconBaseProps } from './index';
const GithubIcon = ({ size = 50, ...reset }: IconBaseProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...reset}
  >
    <circle cx="25" cy="26" r="25" fill="white" />
    <g clipPath="url(#clip0_20_734)">
      <path
        d="M25 0.629517C11.1937 0.629517 0 12.0455 0 26.1295C0 37.3957 7.16406 46.955 17.0969 50.3258C18.3469 50.5617 18.8062 49.7728 18.8062 49.0986C18.8062 48.4914 18.7828 46.4817 18.7719 44.3509C11.8156 45.8936 10.3484 41.3419 10.3484 41.3419C9.21094 38.395 7.57344 37.6109 7.57344 37.6109C5.30469 36.0283 7.74531 36.0602 7.74531 36.0602C10.2547 36.2403 11.5766 38.6883 11.5766 38.6883C13.8062 42.5866 17.425 41.4598 18.8516 40.808C19.075 39.16 19.7234 38.0348 20.4391 37.3973C14.8859 36.7535 9.04844 34.5652 9.04844 24.7955C9.04844 22.0113 10.025 19.737 11.625 17.9504C11.3656 17.3081 10.5094 14.7151 11.8672 11.2025C11.8672 11.2025 13.9672 10.5171 18.7437 13.8162C20.7835 13.2499 22.8876 12.961 25.0016 12.9572C27.125 12.9667 29.2656 13.2504 31.2641 13.8162C36.0359 10.5171 38.1312 11.2025 38.1312 11.2025C39.4922 14.7151 38.6359 17.3081 38.3766 17.9504C39.9797 19.7354 40.95 22.0113 40.95 24.7955C40.95 34.5891 35.1016 36.7455 29.5344 37.3782C30.4313 38.1703 31.2297 39.721 31.2297 42.1005C31.2297 45.5127 31.2 48.2587 31.2 49.0986C31.2 49.7776 31.65 50.5729 32.9172 50.3226C42.8453 46.9471 50 37.3925 50 26.1295C50 12.0455 38.8063 0.629517 25 0.629517Z"
        fill="#ACECAE"
      />
    </g>
    <defs>
      <clipPath id="clip0_20_734">
        <rect width="50" height="51" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default GithubIcon;
