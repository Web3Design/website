import { ArrowRight } from '@/components/icons';
import { Typography } from '@/components/typography';

interface Props {
  dictionary: any;
}
const Copyright = ({ dictionary }: Props) => {
  return (
    <div className="mt-[148px] flex h-[462px] w-full items-center justify-center border-[4px]  border-white  sm:h-[472px] md:h-[622px] lg:h-[522px]">
      <div className="h-full w-full px-[38px] py-[48px]">
        {/* <div className="flex h-full w-full justify-between bg-[#1F938A]">
          <div className="ml-[43px] mt-[51px]"> */}
        <div className="flex h-full w-full flex-col bg-[#1F938A] md:flex-row md:justify-between">
          <div className="ml-[23px] mt-[41px] md:ml-[33px] md:mt-[61px] lg:ml-[43px] lg:mt-[71px]">
            <Typography variant="h4" className="uppercase">
              {dictionary.home.copyright}
            </Typography>
            <Typography variant="h4" className="uppercase"></Typography>
          </div>
          <div className="mx-4 max-w-[622px] sm:mr-[66px]">
            <Typography className="mt-[22px] flex items-center justify-end uppercase">
              {dictionary.home.more} <ArrowRight className="ml-2" />
            </Typography>
            <div className="mt-[12px] flex w-full flex-wrap justify-center gap-[8px] sm:w-auto sm:gap-x-[24px] md:mt-[16px] md:gap-x-[34px] md:gap-y-[12px] lg:mt-[35px] lg:gap-x-[55px] lg:gap-y-[17px]">
              <div>
                <div className="h-[54px] w-[54px] rounded-full bg-white sm:h-[74px] sm:w-[74px]  md:h-[94px] md:w-[94px] lg:h-[114px] lg:w-[114px]"></div>
                <Typography className="mt-[10px] text-center uppercase">
                  @abcd
                </Typography>
              </div>
              <div>
                <div className="h-[54px] w-[54px] rounded-full bg-white sm:h-[74px] sm:w-[74px]  md:h-[94px] md:w-[94px] lg:h-[114px] lg:w-[114px]"></div>
                <Typography className="mt-[10px] text-center uppercase">
                  @abcd
                </Typography>
              </div>
              <div>
                <div className="h-[54px] w-[54px] rounded-full bg-white sm:h-[74px] sm:w-[74px]  md:h-[94px] md:w-[94px] lg:h-[114px] lg:w-[114px]"></div>
                <Typography className="mt-[10px] text-center uppercase">
                  @abcd
                </Typography>
              </div>
              <div>
                <div className="h-[54px] w-[54px] rounded-full bg-white sm:h-[74px] sm:w-[74px]  md:h-[94px] md:w-[94px] lg:h-[114px] lg:w-[114px]"></div>
                <Typography className="mt-[10px] text-center uppercase">
                  @abcd
                </Typography>
              </div>
              <div>
                <div className="h-[54px] w-[54px] rounded-full bg-white sm:h-[74px] sm:w-[74px]  md:h-[94px] md:w-[94px] lg:h-[114px] lg:w-[114px]"></div>
                <Typography className="mt-[10px] text-center uppercase">
                  @abcd
                </Typography>
              </div>
              <div>
                <div className="h-[54px] w-[54px] rounded-full bg-white sm:h-[74px] sm:w-[74px]  md:h-[94px] md:w-[94px] lg:h-[114px] lg:w-[114px]"></div>
                <Typography className="mt-[10px] text-center uppercase">
                  @abcd
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
