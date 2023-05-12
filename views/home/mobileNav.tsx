'use client';

import ClientOnly from '@/components/clientOnly';
import { MenuIcon } from '@/components/icons';
import LayoutLink from '@/components/layout/link';
import { Popover, PopoverContent, PopoverHandler } from '@/components/popover';
import { Typography } from '@/components/typography';
import { useState } from 'react';

interface Props {
  dictionary?: any;
}
const MobileNav = ({ dictionary }: Props) => {
  const [openPopover, setOpenPopover] = useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false)
  };
  return (
    <div className="md:hidden">
      <ClientOnly>
        <Popover
          open={openPopover}
          handler={setOpenPopover}
          placement="bottom-end"
          offset={3}
        >
          <PopoverHandler {...triggers}>
            <div>
              <MenuIcon className="mx-[16px] flex uppercase text-white md:mx-[28px] lg:mx-[36px] xl:mx-[53px]" />
            </div>
          </PopoverHandler>
          <PopoverContent
            {...triggers}
            className="z-[999] flex max-w-[26rem] flex-col items-center justify-center gap-2.5 rounded-xl bg-[#f6f9fc] px-3 py-2"
          >
            <div className="flex flex-col items-center">
              <Typography
                variant="lead"
                className="h-[28px] uppercase text-[#63CA2E]"
              >
                {dictionary.home.navbar.project}
              </Typography>
              <Typography
                variant="lead"
                className="mx-[16px] h-[28px] uppercase text-[#63CA2E] md:mx-[28px] lg:mx-[36px] xl:mx-[53px]"
              >
                {dictionary.home.navbar.contact}
              </Typography>
              <Typography
                variant="lead"
                className="h-[28px] uppercase text-[#63CA2E]"
              >
                {dictionary.home.navbar.aboutUs}
              </Typography>
              <LayoutLink href="/en">
                <Typography className="mt-[12px] flex h-[28px] w-[170px] cursor-pointer items-center justify-center rounded-lg px-2.5 text-[#63CA2E] hover:bg-[#F2F3F7] dark:text-black">
                  English
                </Typography>
              </LayoutLink>
              <LayoutLink href="/zh-CN">
                <Typography className="flex h-[28px] w-[170px] cursor-pointer items-center justify-center rounded-lg px-2.5 text-[#63CA2E] hover:bg-[#F2F3F7] dark:text-black">
                  简体中文
                </Typography>
              </LayoutLink>
              <LayoutLink href="/zh-TW">
                <Typography className="flex h-[28px] w-[170px] cursor-pointer items-center justify-center rounded-lg px-2.5 text-[#63CA2E] hover:bg-[#F2F3F7] dark:text-black">
                  繁體中文
                </Typography>
              </LayoutLink>
            </div>
          </PopoverContent>
        </Popover>
      </ClientOnly>
    </div>
  );
};

export default MobileNav;
