import {
  DeboxIcon,
  FigmaOutlineIcon,
  GithubOutlineIcon,
  TwitterOutlineIcon
} from '@/components/icons';
import LayoutLink from '@/components/layout/link';
import { Typography } from '@/components/typography';

interface Props {
  dictionary: any;
}
const Contract = ({ dictionary }: Props) => {
  return (
    <div className="mb-[136px] mt-[159px] flex h-[434px] w-full  items-center  justify-center border-[4px] border-white">
      <div className="h-full w-full px-[38px] py-[48px]">
        <div className="flex h-full w-full flex-col bg-[#1F938A] md:flex-row md:justify-between">
          <div className="ml-[23px] mt-[41px] md:ml-[33px] md:mt-[61px] lg:ml-[43px] lg:mt-[71px]">
            <Typography variant="h4" className="uppercase">
              {dictionary.home.contract.youCan}
            </Typography>
            <Typography variant="h4" className="uppercase">
              {dictionary.home.contract.findUs}
            </Typography>
            <Typography variant="h4" className="uppercase">
              {dictionary.home.contract.here}
            </Typography>
          </div>
          <div className="mr-0 mt-[26px] flex items-center justify-center gap-x-[8px] sm:mr-[16px] sm:flex-row sm:gap-x-[24px] md:mr-[46px] md:gap-x-[32px] lg:mr-[66px] lg:gap-x-[44px]">
            <div className="flex h-[100px] w-[90px] flex-col items-center sm:w-auto md:h-[160px] lg:h-[180px]">
              <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[11px] bg-[#ACECAE] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] lg:h-[124px] lg:w-[124px]">
                <LayoutLink
                  target={'_blank'}
                  className="md:hidden"
                  href="https://debox.site/dao/pPq1OhUK?queryG=pPq1OhUK"
                >
                  <DeboxIcon className="w-[40px] sm:w-[60px]" />
                </LayoutLink>
                <img
                  className="hidden h-[90px] w-[92px] md:flex"
                  src="/groupqrcodesmall.png"
                  alt="groupqrcodesmall"
                />
              </div>
              <Typography className="mt-[12px] text-center">
                {dictionary.home.contract.deboxGroup}
              </Typography>
            </div>
            <div className="flex h-[100px] w-[90px] flex-col items-center sm:w-auto md:h-[160px] lg:h-[180px]">
              <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[11px] bg-[#ACECAE] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] lg:h-[124px] lg:w-[124px]">
                <TwitterOutlineIcon className="h-[24px] w-[24px] sm:h-[34px]  sm:w-[34px] md:h-[54px] md:w-[54px] lg:h-[74px] lg:w-[74px]" />
              </div>
              <Typography className="mt-[12px] text-center">
                {dictionary.home.contract.twitter}
              </Typography>
            </div>
            <div className="flex h-[100px] w-[90px] flex-col items-center sm:w-auto md:h-[160px] lg:h-[180px]">
              <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[11px] bg-[#ACECAE] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] lg:h-[124px] lg:w-[124px]">
                <GithubOutlineIcon className="h-[28px] w-[28px] sm:h-[54px] sm:w-[35px] md:h-[74px] md:w-[74px] lg:h-[90px] lg:w-[90px]" />
              </div>
              <Typography className="mt-[12px] text-center">
                {dictionary.home.contract.github}
              </Typography>
            </div>
            <div className="flex h-[100px] w-[90px] flex-col items-center sm:w-auto md:h-[160px] lg:h-[180px]">
              <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[11px] bg-[#ACECAE] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] lg:h-[124px] lg:w-[124px]">
                <FigmaOutlineIcon className="h-[28px] w-[28px] sm:h-[54px] sm:w-[35px] md:h-[64px] md:w-[64px] lg:h-[84px] lg:w-[84px]" />
              </div>
              <Typography className="mt-[12px] text-center">
                {dictionary.home.contract.figma}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
