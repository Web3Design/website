'use client';

import {
  ButtonIcon,
  FigmaIcon,
  GithubIcon,
  HeaderIcon,
  TwitterIcon
} from '@/components/icons';
import LayoutLink from '@/components/layout/link';
import { Typography } from '@/components/typography';
import { motion } from 'framer-motion';
import DeboxHover from './deboxHover';
import LanguageSelect from './language';
import MobileNav from './mobileNav';

interface Props {
  dictionary: any;
}

const NavList = ({ dictionary }: Props) => {
  return (
    <div className="hidden items-center md:flex">
      <Typography variant="lead" className="uppercase text-white">
        {dictionary.home.navbar.project}
      </Typography>
      <Typography
        variant="lead"
        className="mx-[16px] uppercase text-white md:mx-[28px] lg:mx-[36px] xl:mx-[53px]"
      >
        {dictionary.home.navbar.contact}
      </Typography>
      <Typography variant="lead" className="uppercase text-white">
        {dictionary.home.navbar.aboutUs}
      </Typography>
      <LanguageSelect dictionary={dictionary} />
    </div>
  );
};

const Header = ({ dictionary }: Props) => {
  return (
    <div className="h-[899px] w-full rounded-[30px] border-[9px] border-white sm:h-[760px] lg:h-[899px]">
      <div className="mx-[16px] flex h-[85px] items-center justify-between sm:mx-[32px] md:ml-[50px] md:mr-[44px] lg:ml-[96px] lg:mr-[80px] xl:ml-[116px] xl:mr-[101px]">
        <NavList dictionary={dictionary} />
        <MobileNav dictionary={dictionary} />
        <div className="flex items-center">
          <DeboxHover />
          <LayoutLink>
            <TwitterIcon className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]" />
          </LayoutLink>
          <LayoutLink className="mx-[8px] sm:mx-[16px]  md:mx-[18px] lg:mx-[22px] xl:mx-[25px]">
            <GithubIcon className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]" />
          </LayoutLink>
          <LayoutLink>
            <FigmaIcon className="h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]" />
          </LayoutLink>
        </div>
      </div>
      <div className="mx-[32px] flex flex-col justify-between sm:flex-row md:ml-[50px] md:mr-[44px] lg:ml-[96px] lg:mr-[80px] xl:ml-[116px] xl:mr-[101px]">
        <div className="flex-1">
          <Typography
            className="mt-[38px] uppercase text-white lg:mt-[67px]"
            variant="h1"
          >
            {dictionary.home.header.web3}
          </Typography>
          <Typography className="uppercase text-white" variant="h1">
            {dictionary.home.header.design}
          </Typography>
          <Typography className="uppercase text-white" variant="h1">
            {dictionary.home.header.kit}
          </Typography>
          <Typography className="mt-[56px] uppercase text-white" variant="h5">
            {dictionary.home.header.web3DesignKit}
          </Typography>
          <motion.div
            whileHover={{
              scale: 1.04
            }}
            whileTap={{
              opacity: 0.86
            }}
            className="ml-[-20px] h-[92px] w-[188px] cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.figma.com/file/oL7dSaGzX1hpsoKpq2jLRE/Web3.0-Design-Kit?type=design&node-id=0-1&t=QPsuO27BS9LZZ7xr-0'
              )
            }
          >
            <ButtonIcon className="mt-[43px] h-full w-full" />
          </motion.div>
        </div>
        <div className="ml-0 flex justify-center md:ml-[-40px] lg:ml-0">
          <div className="mt-[38px] h-[163px] w-[163px] sm:mt-[138px] md:h-[263px] md:w-[263px] lg:mt-[48px] lg:h-[363px] lg:w-[363px] xl:mt-[67px] xl:h-[463px] xl:w-[463px]">
            <HeaderIcon className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
