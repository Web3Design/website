import { IconBaseProps } from './index';
const MatarialDesign = ({
  width = 474,
  height = 512,
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
      x="123.433"
      y="130.18"
      width="255.612"
      height="256.584"
      fill="#1F938A"
    />
    <path
      d="M368.545 325.534C368.545 353.473 345.693 376.264 317.329 376.264C288.964 376.264 266.112 353.473 266.112 325.534C266.112 297.594 288.964 274.803 317.329 274.803C345.693 274.803 368.545 297.594 368.545 325.534Z"
      fill="#48B112"
      stroke="#FFF2F2"
      strokeWidth="21"
    />
    <circle cx="154.534" cy="164.197" r="31.1011" fill="#FEDFDA" />
    <circle cx="154.534" cy="226.399" r="31.1011" fill="#FFAF18" />
    <circle cx="216.736" cy="164.197" r="31.1011" fill="#48B112" />
    <circle cx="216.736" cy="230.287" r="15.5506" fill="#FE6150" />
    <path
      d="M379.531 260.416C362.236 260.416 345.112 257.06 329.134 250.539C313.156 244.019 298.638 234.461 286.409 222.413C274.18 210.364 264.48 196.061 257.862 180.319C251.243 164.577 247.837 147.705 247.837 130.666L289.18 130.666C289.18 142.356 291.517 153.931 296.058 164.731C300.598 175.531 307.253 185.344 315.643 193.61C324.033 201.876 333.993 208.433 344.955 212.907C355.917 217.38 367.666 219.683 379.531 219.683L379.531 260.416Z"
      fill="#FFAF18"
    />
    <path
      d="M247.837 386.764C247.837 370.427 244.632 354.25 238.404 339.157C232.177 324.063 223.049 310.349 211.542 298.797C200.035 287.245 186.375 278.081 171.34 271.829C156.306 265.577 140.192 262.36 123.919 262.36L123.919 386.764H247.837Z"
      fill="#F4A914"
    />
  </svg>
);

export default MatarialDesign;