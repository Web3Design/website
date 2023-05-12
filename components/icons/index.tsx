import HeaderIcon from './headerIcon';
import DeboxIcon from './debox';
import GithubIcon from './github';
import FigmaIcon from './figma';
import TwitterIcon from './twitter';
import ButtonIcon from './button';
import MiddleIcon from './middleIcon';
import OpenSource from './openSource';
import Entrance from './entrance';
import ArrowRight from './arrowRight';
import BasicLibrary from './basicLibrary';
import Creative from './creative';
import DesignIcon from './design';
import MatarialDesign from './matarialDesign';
import PosterLibrary from './posterLibrary';
import ProductTool from './productTool';
import ButtonSmall from './buttonSmall';
import FigmaOutlineIcon from './figmaOutline';
import TwitterOutlineIcon from './twitterOutline';
import GithubOutlineIcon from './githubOutline';
import MenuIcon from './menu';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export {
  FigmaOutlineIcon,
  TwitterOutlineIcon,
  GithubOutlineIcon,
  HeaderIcon,
  DeboxIcon,
  GithubIcon,
  FigmaIcon,
  TwitterIcon,
  MiddleIcon,
  ButtonIcon,
  OpenSource,
  Entrance,
  ArrowRight,
  BasicLibrary,
  Creative,
  DesignIcon,
  MatarialDesign,
  PosterLibrary,
  ProductTool,
  ButtonSmall,
  MenuIcon
};
