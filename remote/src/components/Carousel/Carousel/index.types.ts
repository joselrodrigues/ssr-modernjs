import { HTMLAttributes } from 'react';

export type BreakpointProps = {
  showControls: boolean;
  showSteppers: boolean;
  fullscreen?: boolean;
  itemsPerPage?: number;
  pageWidth?: string;
};

export type Breakpoints = {
  small?: Partial<BreakpointProps>;
  medium?: Partial<BreakpointProps>;
  large?: Partial<BreakpointProps>;
  extralarge?: Partial<BreakpointProps>;
};

export type AccessibilityProps = {
  nextButtonLabel: string;
  prevButtonLabel: string;
  carouselRegionLabel?: string;
  stepperLabel: string;
  stepperOf: string;
};

export interface CarouselProps {
  children: React.ReactNode[];
  itemWidth?: number;
  gap?: number;
  stepsPerClick?: number;
  controlsPosition: 'center' | 'bottom';
  autoSlide: boolean;
  breakpoints?: Breakpoints;
  a11yLabel?: AccessibilityProps;
  ref?: React.Ref<HTMLDivElement>;
  onChange?: (index: number) => void;
}

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  inert?: boolean | string;
}
