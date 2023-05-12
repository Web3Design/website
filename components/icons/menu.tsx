import { IconBaseProps } from './index';
const MenuIcon = ({
  color = '#D3F85A',
  size = 24,
  ...reset
}: IconBaseProps) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...reset}
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default MenuIcon;
