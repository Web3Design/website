import {
  Creative,
  DesignIcon,
  Entrance,
  MiddleIcon,
  OpenSource
} from '@/components/icons';
import { Typography } from '@/components/typography';

interface Props {
  dictionary: any;
}
const Features = ({ dictionary }: Props) => {
  return (
    <div className="mt-[150px] flex items-center justify-center">
      <div className="mr-[16px] flex flex-col items-end md:mr-[24px] lg:mr-[45px]">
        <div className="my-[8px] flex items-center justify-end md:my-[12px] lg:my-[18px]">
          <Typography
            variant="h5"
            className="mr-[8px] text-right text-white md:mr-[28px] lg:mr-[46px]"
          >
            {dictionary.home.features.openSource}
          </Typography>
          <div>
            <OpenSource className="h-[38px] w-[38px] text-right md:h-[52px] md:w-[52px] lg:h-[68px] lg:w-[68px]" />
          </div>
        </div>
        <div className="my-[8px] flex items-center justify-end md:my-[12px] lg:my-[18px]">
          <Typography
            variant="h5"
            className="mr-[8px] text-white md:mr-[28px] lg:mr-[46px]"
          >
            {dictionary.home.features.entrance}
          </Typography>
          <div>
            <Entrance className="h-[38px] w-[38px] text-right md:h-[52px] md:w-[52px] lg:h-[68px] lg:w-[68px]" />
          </div>
        </div>
        <div className="my-[8px] flex items-center justify-end md:my-[12px] lg:my-[18px]">
          <Typography
            variant="h5"
            className="mr-[8px] text-white md:mr-[28px] lg:mr-[46px]"
          >
            {dictionary.home.features.creative}
          </Typography>
          <div>
            <Creative className="h-[38px] w-[38px] text-right md:h-[52px] md:w-[52px] lg:h-[68px] lg:w-[68px]" />
          </div>
        </div>
        <div className="my-[8px] flex items-center justify-end md:my-[12px] lg:my-[18px]">
          <Typography
            variant="h5"
            className="mr-[8px] text-white md:mr-[28px] lg:mr-[46px]"
          >
            {dictionary.home.features.design}
          </Typography>
          <div>
            <DesignIcon className="h-[38px] w-[38px] md:h-[52px] md:w-[52px] lg:h-[68px] lg:w-[68px]" />
          </div>
        </div>
      </div>
      <div className="ml-[16px] h-[200px] w-[200px] sm:h-[289px] sm:w-[263px] md:ml-[24px] md:h-[329px]  md:w-[303px] lg:ml-[45px] lg:h-[389px] lg:w-[363px]">
        <MiddleIcon className="h-full w-full" />
      </div>
    </div>
  );
};

export default Features;
