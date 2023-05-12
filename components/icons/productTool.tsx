import { IconBaseProps } from './index';
const ProductTool = ({
  width = 265,
  height = 392,
  ...reset
}: IconBaseProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...reset}
  >
    <rect
      x="8.52246"
      y="8.17975"
      width="255.612"
      height="256.584"
      fill="#1F938A"
    />
    <rect
      x="130.983"
      y="8.17975"
      width="133.152"
      height="129.264"
      fill="#48B112"
    />
    <rect
      x="130.983"
      y="138.416"
      width="133.152"
      height="126.348"
      fill="#F5F5F5"
    />
    <circle cx="212.624" cy="113.146" r="15.5506" fill="#FEDFDA" />
    <circle cx="160.626" cy="104.885" r="23.8118" fill="#FFAF18" />
    <circle cx="218.455" cy="42.1966" r="31.1011" fill="#FE6150" />
    <path
      d="M193.186 264.764C193.186 256.596 191.577 248.507 188.451 240.96C185.325 233.414 180.743 226.556 174.967 220.78C169.191 215.004 162.334 210.423 154.787 207.297C147.241 204.171 139.152 202.562 130.983 202.562L130.983 264.764H193.186Z"
      fill="#FE6150"
    />
    <path
      d="M130.983 138.416C114.391 138.416 97.9609 141.684 82.6317 148.033C67.3024 154.383 53.3738 163.69 41.6413 175.422C29.9088 187.155 20.602 201.083 14.2524 216.413C7.90285 231.742 4.63476 248.172 4.63476 264.764L47.6854 264.764C47.6854 253.825 49.84 242.994 54.0261 232.887C58.2122 222.781 64.3479 213.599 72.0828 205.864C79.8177 198.129 89.0003 191.993 99.1065 187.807C109.213 183.621 120.044 181.466 130.983 181.466L130.983 138.416Z"
      fill="#FFAF18"
    />
    <mask
      id="mask0_134_3"
      style={{
        maskType: 'alpha'
      }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="131"
      height="143"
    >
      <rect
        x="0.748047"
        y="0.40448"
        width="130.236"
        height="141.899"
        fill="#1F938A"
      />
    </mask>
    <g mask="url(#mask0_134_3)">
      <path
        d="M-6.74805 57.6769L75.7035 -17.5466"
        stroke="#FCFFFF"
        strokeWidth="9"
      />
      <path
        d="M-9.55859 85.8857L103.812 -17.5466"
        stroke="#FCFFFF"
        strokeWidth="9"
      />
      <path
        d="M-4.87402 108.966L118.803 -3.86945"
        stroke="#FCFFFF"
        strokeWidth="9"
      />
      <path
        d="M-6.74805 142.303L135.668 12.3719"
        stroke="#F5F5F5"
        strokeWidth="9"
      />
      <path
        d="M10.1172 163.674L140.353 46.5645"
        stroke="#FCFFFF"
        strokeWidth="9"
      />
      <path
        d="M11.0547 200.431L141.291 83.3214"
        stroke="#FCFFFF"
        strokeWidth="9"
      />
    </g>
  </svg>
);

export default ProductTool;
