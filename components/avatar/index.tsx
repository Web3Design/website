import { ComponentProps, forwardRef } from 'react';
import type { SizeType, VariantType } from '@/types/components/avatar';

import { ClassName } from '@/types/components/theme';
import { tv } from 'tailwind-variants';

const AvatarTv = tv({
  base: 'avatar relative inline-block object-cover object-center',
  variants: {
    variant: {
      rounded: '',
      circular: '!rounded-full'
    },
    size: {
      xs: 'h-6 w-6 rounded-md',
      sm: 'h-9 w-9 rounded-md',
      md: 'h-12 w-12 rounded-lg',
      lg: 'h-[58px] w-[58px] rounded-lg',
      xl: 'h-[74px] w-[74px] rounded-xl',
      xxl: 'h-[110px] w-[110px] rounded-2xl'
    }
  },
  defaultVariants: {
    variant: 'rounded',
    size: 'md'
  }
});

export interface AvatarProps extends ComponentProps<'img'> {
  variant?: VariantType;
  size?: SizeType;
  className?: ClassName;
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ variant = 'rounded', size = 'md', className = '', ...rest }, ref) => {
    return (
      <img
        {...rest}
        ref={ref}
        className={AvatarTv({
          variant,
          size,
          class: className
        })}
      />
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
