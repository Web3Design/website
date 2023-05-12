'use client';

import { i18n } from '@/i18n/config';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import StartRouterChange from './state';

export default function LayoutLink({
  href,
  style,
  children,
  className,
  ...reset
}: React.ComponentProps<'a'>) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const startChange = useContext(StartRouterChange);
  const useLink = href && href.startsWith('/');
  const router = useRouter();
  if (useLink) {
    return (
      <a
        className={className}
        onClick={() => {
          const { pathname, search, hash } = window.location;
          let url = '';
          const lng = pathname.split('/')[1];
          url = `/${lng}${href}`;
          const hasList = i18n.locales.filter((e) => href.includes(e));
          if (hasList.length) {
            url = href;
          } else {
            url = `/${lng}${href}`;
          }
          router.push(url);
          if (href !== pathname + search + hash) startChange();
        }}
        style={style}
        {...reset}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} style={style} className={className} {...reset}>
      {children}
    </a>
  );
}
