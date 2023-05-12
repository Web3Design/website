'use client';

import ClientOnly from '@/components/clientOnly';
import { DeboxIcon } from '@/components/icons';
import LayoutLink from '@/components/layout/link';
import { Popover, PopoverContent, PopoverHandler } from '@/components/popover';
import { useEffect, useState } from 'react';

const DeboxHover = () => {
  const [isMobile, setIsmobile] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false)
  };
  useEffect(() => {
    window.addEventListener('resize', () =>
      window.innerWidth >= 960 ? setIsmobile(false) : setIsmobile(true)
    );
    window.innerWidth >= 960 ? setIsmobile(false) : setIsmobile(true);

    return window.removeEventListener('resize', () =>
      window.innerWidth >= 960 ? setIsmobile(false) : setIsmobile(true)
    );
  }, []);
  return (
    <ClientOnly>
      {isMobile ? (
        <LayoutLink
          target={'_blank'}
          href="https://debox.site/dao/pPq1OhUK?queryG=pPq1OhUK"
        >
          <DeboxIcon className="mx-[8px] h-[30px] w-[30px] sm:mx-[16px] md:mx-[18px] md:h-[40px] md:w-[40px] lg:mx-[22px] lg:h-[50px] lg:w-[50px] xl:mx-[25px]" />
        </LayoutLink>
      ) : (
        <Popover
          open={openPopover}
          handler={setOpenPopover}
          placement="bottom"
          offset={3}
        >
          <PopoverHandler {...triggers}>
            <div>
              <DeboxIcon className="mx-[8px] h-[30px] w-[30px] sm:mx-[16px] md:mx-[18px] md:h-[40px] md:w-[40px] lg:mx-[22px] lg:h-[50px] lg:w-[50px] xl:mx-[25px]" />
            </div>
          </PopoverHandler>
          <PopoverContent
            {...triggers}
            className="z-[999] flex max-w-[26rem] flex-col items-center justify-center gap-2.5 rounded-xl bg-[#f6f9fc] px-3 py-2"
          >
            <div className="h-[300px] w-[200px]">
              <img src="/groupqrcode.png" alt="groupqrcode" />
            </div>
          </PopoverContent>
        </Popover>
      )}
    </ClientOnly>
  );
};

export default DeboxHover;
