import type { ReactNode } from 'react';
import type { Animation, DismissType, OffsetType } from './theme';

export type Animation = Animation;
export type DismissType = DismissType;
export type OffsetType = OffsetType;

// @floating-ui types
import type {
  FloatingContext,
  Placement,
  ReferenceType,
  Strategy
} from '@floating-ui/react';

// typescript types
export type OpenType = boolean;
export type handler = React.Dispatch<React.SetStateAction<any>>;
export type PlacementType = Placement;
export type ContentType = ReactNode;
export type ContextValueType = {
  open: open;
  strategy: Strategy;
  x?: number;
  y?: number;
  context: FloatingContext<ReferenceType>;
  reference: (node: HTMLElement) => void;
  floating: (node: HTMLElement) => void;
  getReferenceProps: (userProps?: React.HTMLProps<Element>) => any;
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  appliedAnimation: animate;
  labelId: string;
  descriptionId: string;
};
export type interactive = boolean;
