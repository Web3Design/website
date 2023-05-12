import { ArrowRight } from '@/components/icons';
import { Typography } from '@/components/typography';

interface Props {
  dictionary: any;
}
const Hacker = ({ dictionary }: Props) => {
  return (
    <div className="mt-[158px] flex h-[420px] w-full items-center justify-center border-[4px] border-white md:h-[366px] lg:h-[466px]">
      <div className="h-full w-full px-[38px] py-[48px]">
        <div className="flex h-full w-full flex-col bg-[#1F938A] md:flex-row md:justify-between">
          <div className="ml-[23px] mt-[41px] md:ml-[33px] md:mt-[61px] lg:ml-[43px] lg:mt-[71px]">
            <Typography variant="h4" className="uppercase">
              {dictionary.home.hacker.hacker}
            </Typography>
            <Typography variant="h4" className="uppercase">
              {dictionary.home.hacker.pine}
            </Typography>
          </div>
          <div className="mr-[18px] md:mr-[44px] lg:mr-[66px]">
            <Typography className="mt-[26px] flex items-center justify-end uppercase md:mt-[32px] lg:mt-[47px]">
              {dictionary.home.more} <ArrowRight className="ml-2" />
            </Typography>
            <div className="mt-[26px] flex justify-center gap-[8px] sm:flex-row sm:gap-[24px] md:gap-[32px] lg:gap-[44px]">
              <div>
                <div className="h-[43px] w-[70px] bg-white sm:h-[63px] sm:w-[90px] md:h-[83px] md:w-[111px]  lg:h-[123px] lg:w-[151px]  xl:h-[173px] xl:w-[201px]"></div>
                <Typography className="mt-[20px] text-center">xxxx</Typography>
              </div>
              <div>
                <div className="h-[43px] w-[70px] bg-white sm:h-[63px] sm:w-[90px] md:h-[83px] md:w-[111px]  lg:h-[123px] lg:w-[151px]  xl:h-[173px] xl:w-[201px]"></div>
                <Typography className="mt-[20px] text-center">xxxx</Typography>
              </div>
              <div>
                <div className="h-[43px] w-[70px] bg-white sm:h-[63px] sm:w-[90px] md:h-[83px] md:w-[111px]  lg:h-[123px] lg:w-[151px]  xl:h-[173px] xl:w-[201px]"></div>
                <Typography className="mt-[20px] text-center">xxxx</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hacker;
