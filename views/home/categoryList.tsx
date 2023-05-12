'use client';

import {
  BasicLibrary,
  ButtonSmall,
  MatarialDesign,
  PosterLibrary,
  ProductTool
} from '@/components/icons';
import { Typography } from '@/components/typography';
import { motion } from 'framer-motion';

interface Props {
  dictionary: any;
}
const CategoryList = ({ dictionary }: Props) => {
  return (
    <div className="mt-[120px] flex flex-wrap justify-evenly gap-y-[16px]">
      <div className="relative min-h-[522px] max-w-[292px]">
        <Typography variant="h6" className="text-center text-white">
          {dictionary.home.category.basicSpecification}
        </Typography>
        <Typography variant="h6" className="text-center text-white">
          {dictionary.home.category.library}
        </Typography>
        <div
          className="mt-[34px] flex h-[325px] w-[290px] flex-col items-center bg-white"
          style={{
            filter: 'drop-shadow(0px 13px 4px rgba(0, 0, 0, 0.1))'
          }}
        >
          <div className="h-[256px] w-[256px]">
            <BasicLibrary className="mt-[30px] h-full w-full" />
          </div>
        </div>
        <div className="absolute bottom-[14px] left-1/2 h-[114px] w-[210px] translate-x-[-55%] cursor-pointer">
          <motion.div
            whileHover={{
              scale: 1.04
            }}
            whileTap={{
              opacity: 0.86
            }}
            className="h-[114px] w-[210px] cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.figma.com/file/oL7dSaGzX1hpsoKpq2jLRE/Web3.0-Design-Kit?type=design&node-id=0-1&t=MULKWwu9ryo6EIpf-0'
              )
            }
          >
            <ButtonSmall className="h-full w-full" />
          </motion.div>
        </div>
      </div>
      <div className="relative min-h-[522px] max-w-[292px]">
        <Typography variant="h6" className="text-center text-white">
          {dictionary.home.category.productTool}
        </Typography>
        <Typography variant="h6" className="text-center text-white">
          {dictionary.home.category.library}
        </Typography>
        <div
          className="mt-[34px] flex h-[325px] w-[290px] flex-col items-center bg-white"
          style={{
            filter: 'drop-shadow(0px 13px 4px rgba(0, 0, 0, 0.1))'
          }}
        >
          <div className="mr-[10px] mt-[54px] h-[265px] w-[392px]">
            <ProductTool className="mt-[30px] h-full w-full scale-[1.48]" />
          </div>
        </div>
        <div className="absolute bottom-[14px] left-1/2 h-[114px] w-[210px] translate-x-[-55%] cursor-pointer">
          <motion.div
            whileHover={{
              scale: 1.04
            }}
            whileTap={{
              opacity: 0.86
            }}
            className="h-[114px] w-[210px] cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.figma.com/file/oL7dSaGzX1hpsoKpq2jLRE/Web3.0-Design-Kit?type=design&node-id=77-573&t=MULKWwu9ryo6EIpf-0'
              )
            }
          >
            <ButtonSmall className="h-full w-full" />
          </motion.div>
        </div>
      </div>
      <div className="relative min-h-[522px] max-w-[292px]">
        <Typography variant="h6" className="text-center text-white">
          {dictionary.home.category.posterPromotion}
        </Typography>
        <Typography variant="h6" className="text-center text-white">
          {dictionary.home.category.library}
        </Typography>
        <div
          className="mt-[34px] flex h-[325px] w-[290px] flex-col items-center bg-white"
          style={{
            filter: 'drop-shadow(0px 13px 4px rgba(0, 0, 0, 0.1))'
          }}
        >
          <div className="h-[256px] w-[256px]">
            <PosterLibrary className="ml-[65px] mt-[-37px] h-full w-full scale-[1.52]" />
          </div>
        </div>
        <div className="absolute bottom-[14px] left-1/2 h-[114px] w-[210px] translate-x-[-55%] cursor-pointer">
          <motion.div
            whileHover={{
              scale: 1.04
            }}
            whileTap={{
              opacity: 0.86
            }}
            className="h-[114px] w-[210px] cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.figma.com/file/oL7dSaGzX1hpsoKpq2jLRE/Web3.0-Design-Kit?type=design&node-id=77-574&t=MULKWwu9ryo6EIpf-0'
              )
            }
          >
            <ButtonSmall className="h-full w-full" />
          </motion.div>
        </div>
      </div>
      <div className="relative min-h-[522px] max-w-[292px]">
        <Typography variant="h6" className="text-center text-white">
          {dictionary.home.category.materialDesign}
        </Typography>
        <Typography variant="h6" className="text-center text-white">
          {dictionary.home.category.library}
        </Typography>
        <div
          className="mt-[34px] flex h-[325px] w-[290px] flex-col items-center bg-white"
          style={{
            filter: 'drop-shadow(0px 13px 4px rgba(0, 0, 0, 0.1))'
          }}
        >
          <div className="h-[256px] w-[256px]">
            <MatarialDesign className="ml-[-13px] mt-[25px] h-full w-full scale-[2.04]" />
          </div>
        </div>
        <div className="absolute bottom-[14px] left-1/2 h-[114px] w-[210px] translate-x-[-55%] cursor-pointer">
          <motion.div
            whileHover={{
              scale: 1.04
            }}
            whileTap={{
              opacity: 0.86
            }}
            className="h-[114px] w-[210px] cursor-pointer"
            onClick={() =>
              window.open(
                'https://www.figma.com/file/oL7dSaGzX1hpsoKpq2jLRE/Web3.0-Design-Kit?type=design&node-id=77-575&t=MULKWwu9ryo6EIpf-0'
              )
            }
          >
            <ButtonSmall className="h-full w-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
