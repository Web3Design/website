import { ComponentProps, FC, forwardRef } from 'react';
import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs
} from '@floating-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePopover } from './popoverContext';

// types
import type {
  Children,
  ClassName,
  NewAnimatePresenceProps
} from '@/types/components/theme';
import { tv } from 'tailwind-variants';

export interface PopoverContentProps extends ComponentProps<'div'> {
  className?: ClassName;
  children: Children;
}

const popoverTv = tv({
  base: 'border-blue-gray-50 shadow-blue-gray-500/10 text-blue-gray-500 whitespace-normal break-words rounded-lg border bg-white p-4 text-sm font-normal shadow-lg focus:outline-none'
});

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className, ...rest }, ref) => {
    const {
      open,
      strategy,
      x,
      y,
      context,
      floating,
      getFloatingProps,
      appliedAnimation,
      labelId,
      descriptionId
    } = usePopover();

    // set refs
    const mergedRef = useMergeRefs([ref, floating]);

    // Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: FC<NewAnimatePresenceProps> = AnimatePresence;

    return (
      <FloatingPortal>
        <NewAnimatePresence>
          {open && (
            <FloatingFocusManager context={context}>
              <motion.div
                {...getFloatingProps({
                  ...rest,
                  ref: mergedRef,
                  className: `${popoverTv({
                    class: className
                  })}`,
                  style: {
                    position: strategy,
                    top: y ?? '',
                    left: x ?? ''
                  },
                  'aria-labelledby': labelId,
                  'aria-describedby': descriptionId
                })}
                initial="unmount"
                exit="unmount"
                animate={open ? 'mount' : 'unmount'}
                variants={appliedAnimation}
              >
                {children}
              </motion.div>
            </FloatingFocusManager>
          )}
        </NewAnimatePresence>
      </FloatingPortal>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';

export default PopoverContent;
