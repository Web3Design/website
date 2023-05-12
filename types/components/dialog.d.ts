import type { Animation, DismissType } from './theme';

export type Animation = Animation;

export type DismissType = DismissType;

export interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, 'children'> {
  children: React.ReactNode;
}
