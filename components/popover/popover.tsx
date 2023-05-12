import { ComponentProps, useEffect, useMemo, useState } from 'react';

import {
  autoUpdate,
  flip,
  offset as fuiOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole
} from '@floating-ui/react';
import merge from 'deepmerge';

import { PopoverContextProvider } from './popoverContext';

// types
import type {
  Animation,
  ContextValueType,
  DismissType,
  OffsetType,
  OpenType,
  PlacementType
} from '@/types/components/popover';
import { Children, ClassName } from '@/types/components/theme';

export interface PopoverProps extends ComponentProps<'div'> {
  open?: OpenType;
  handler?: (e: any) => void;
  placement?: PlacementType;
  offset?: OffsetType;
  dismiss?: DismissType;
  animate?: Animation;
  children: Children;
  className?: ClassName;
}

const Popover = ({
  open = false,
  handler,
  placement = 'top',
  offset = 5,
  dismiss,
  animate,
  children
}: PopoverProps) => {
  const [internalOpen, setInternalOpen] = useState(false);

  open = open ?? internalOpen;
  handler = handler ?? setInternalOpen;

  // set animation
  const animation = {
    unmount: {
      opacity: 0
    },
    mount: {
      opacity: 1
    }
  };
  const appliedAnimation = merge(animation, animate ?? {});

  // set @floating-ui
  const { x, y, reference, floating, strategy, refs, update, context } =
    useFloating({
      open,
      onOpenChange: handler ?? undefined,
      middleware: [fuiOffset(offset), flip(), shift()],
      placement
    });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context, dismiss)
  ]);

  useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, update, refs.reference, refs.floating]);

  const contextValue = useMemo(
    () => ({
      open,
      strategy,
      x,
      y,
      context,
      reference,
      floating,
      getReferenceProps,
      getFloatingProps,
      appliedAnimation,
      labelId,
      descriptionId
    }),
    [
      open,
      strategy,
      x,
      y,
      context,
      reference,
      floating,
      getFloatingProps,
      getReferenceProps,
      appliedAnimation,
      labelId,
      descriptionId
    ]
  );

  return (
    <PopoverContextProvider value={contextValue as ContextValueType}>
      {children}
    </PopoverContextProvider>
  );
};

Popover.displayName = 'Popover';

export default Popover;
