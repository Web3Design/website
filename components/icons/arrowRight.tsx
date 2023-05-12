import { IconBaseProps } from './index';
const ArrowRight = ({
  color = '#FFF',
  width = 16,
  height = 20,
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
    <path
      d="M2 2L12.9611 8.26351C14.3048 9.0313 14.3048 10.9687 12.9611 11.7365L2 18"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default ArrowRight;
