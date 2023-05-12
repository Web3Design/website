import { Children } from '@/types/components/theme';
import { createContext, useContext } from 'react';
import type { ContextValueType } from '../../types/components/popover';

export interface PopoverContextProviderProps {
  value: ContextValueType;
  children: Children;
}

export const PopoverContext = createContext<ContextValueType | null>(null);
PopoverContext.displayName = 'PopoverContext';

export function usePopover() {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error(
      'usePopover() must be used within a Popover. It happens when you use PopoverHandler or PopoverContent components outside the Popover component.'
    );
  }

  return context;
}

export const PopoverContextProvider = ({
  value,
  children
}: PopoverContextProviderProps) => {
  return (
    <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
  );
};

PopoverContextProvider.displayName = 'PopoverContextProvider';
