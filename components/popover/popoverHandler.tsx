import { cloneElement, ComponentProps, forwardRef } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { usePopover } from './popoverContext';

// types
import { Children } from '@/types/components/theme';

export interface PopoverHandlerProps extends ComponentProps<any> {
  children: Children | ComponentProps<any>;
}

export const PopoverHandler = forwardRef<HTMLDivElement, PopoverHandlerProps>(
  ({ children, ...rest }, ref) => {
    const { getReferenceProps, reference } = usePopover();

    const mergedRef = useMergeRefs([ref, reference]);

    return cloneElement(children, {
      ...getReferenceProps({
        ...rest,
        ref: mergedRef
      })
    });
  }
);

PopoverHandler.displayName = 'PopoverHandler';

export default PopoverHandler;
