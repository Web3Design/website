'use client';

import { HTMLAttributes, ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { Colors } from '@/types/components/theme';

export type VariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'lead'
  | 'paragraph'
  | 'small';

export type ColorsType = 'inherit' | 'current' | 'black' | 'white' | Colors;

const typography = tv({
  base: ' font-sans antialiased',
  variants: {
    color: {
      inherit: 'text-inherit',
      current: 'text-current',
      black: 'text-black',
      white: 'text-white',
      'blue-gray':
        'text-blue-gray-900 from-blue-gray-600 to-blue-gray-400 bg-gradient-to-tr',
      gray: 'bg-gradient-to-tr from-gray-600 to-gray-400 text-gray-700',
      brown: 'text-brown-500 from-brown-600 to-brown-400 bg-gradient-to-tr',
      'deep-orange':
        'text-deep-orange-500 from-deep-orange-600 to-deep-orange-400 bg-gradient-to-tr',
      orange: 'bg-gradient-to-tr from-orange-600 to-orange-400 text-orange-500',
      amber: 'bg-gradient-to-tr from-amber-600 to-amber-400 text-amber-500',
      yellow: 'bg-gradient-to-tr from-yellow-600 to-yellow-400 text-yellow-500',
      lime: 'bg-gradient-to-tr from-lime-600 to-lime-400 text-lime-500',
      'light-green':
        'text-light-green-500 from-light-green-600 to-light-green-400 bg-gradient-to-tr',
      green: 'bg-gradient-to-tr from-green-600 to-green-400 text-green-500',
      teal: 'bg-gradient-to-tr from-teal-600 to-teal-400 text-teal-500',
      cyan: 'bg-gradient-to-tr from-cyan-600 to-cyan-400 text-cyan-500',
      'light-blue':
        'text-light-blue-500 from-light-blue-600 to-light-blue-400 bg-gradient-to-tr',
      blue: 'bg-gradient-to-tr from-blue-600 to-blue-400 text-blue-500',
      indigo: 'bg-gradient-to-tr from-indigo-600 to-indigo-400 text-indigo-500',
      'deep-purple':
        'text-deep-purple-500 from-deep-purple-600 to-deep-purple-400 bg-gradient-to-tr',
      purple: 'bg-gradient-to-tr from-purple-600 to-purple-400 text-purple-500',
      pink: 'bg-gradient-to-tr from-pink-600 to-pink-400 text-pink-500',
      red: 'bg-gradient-to-tr from-red-600 to-red-400 text-red-500'
    },
    variant: {
      h1: 'text-[70px] font-[700] leading-[1.2] tracking-normal sm:text-[90px] md:text-[100px] lg:text-[110px]',
      h2: 'text-4xl font-semibold leading-[1.2] tracking-normal md:text-[18px] lg:text-[20px]',
      h3: 'text-[38px] font-[700] leading-[1.2] tracking-normal md:text-[42px] lg:text-[48px]',
      h4: 'text-[32px] font-[700] leading-[1.2] tracking-normal md:text-[36px] lg:text-[40px]',
      h5: 'text-[24px] font-[700] leading-[1.2] tracking-normal sm:text-[28px] md:text-[32px] lg:text-[36px]',
      h6: 'text-[22px] font-[700] leading-[1.2] tracking-normal md:text-[26px] lg:text-[30px]',
      lead: 'text-[18px] font-[700] leading-[1.2] md:text-[20px] lg:text-[24px]',
      paragraph:
        'text-[16px] font-[700] leading-[1.2] md:text-[18px] lg:text-[20px]',
      small:
        'text-[12px] font-[700] leading-[1.2] md:text-[13px] lg:text-[15px]'
    },
    textGradient: {
      true: 'bg-clip-text text-transparent'
    }
  },
  defaultVariants: {
    variant: 'paragraph',
    color: 'white',
    textGradient: false
  }
});

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  variant?: VariantType;
  color?: ColorsType;
  textGradient?: boolean;
}

export const Typography = ({
  variant,
  textGradient,
  color,
  children,
  className
}: TypographyProps) => {
  return (
    <div
      className={typography({
        variant,
        textGradient,
        color,
        class: className
      })}
    >
      {children}
    </div>
  );
};
