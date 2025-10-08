import { CarouselPage } from './index.styles';
import { BreakpointProps, Breakpoints } from './index.types';
import useBreakpoint from '@/hooks/useBreakpoint';
import React, { Dispatch, SetStateAction, TouchEvent } from 'react';

const TOUCH_OFFSET = 50;
const GAP_BETWEEN_ITEMS = 2.5 * 16; // 2.5rem
const GAP_BETWEEN_PAGES = 1.5 * 16; // 1.5rem
const DEFAULT_BREAKPOINT: BreakpointProps = {
  showControls: true,
  showSteppers: true,
};

const getBreakpointConfig = (userBreakpoints: Breakpoints = {}): Required<Breakpoints> => {
  return {
    small: { ...DEFAULT_BREAKPOINT, ...userBreakpoints.small },
    medium: { ...DEFAULT_BREAKPOINT, ...userBreakpoints.medium },
    large: { ...DEFAULT_BREAKPOINT, ...userBreakpoints.large },
    extralarge: { ...DEFAULT_BREAKPOINT, ...userBreakpoints.extralarge },
  };
};

export function useHandlers(
  setCurrentPage: Dispatch<SetStateAction<number>>,
  childrenRef: React.RefObject<HTMLDivElement>,
  children: React.ReactNode[],
  currentPage: number,
  controlsPosition: 'center' | 'bottom',
  breakpoints?: Breakpoints,
  onChange?: (page: number) => void,
) {
  const breakpoint = useBreakpoint();

  let breakpointsCurrentConfig: Partial<BreakpointProps> = DEFAULT_BREAKPOINT;
  if (breakpoints) {
    breakpointsCurrentConfig =
      breakpoints[breakpoint as keyof typeof breakpoints] ?? DEFAULT_BREAKPOINT;
  }

  const itemsPerPage = breakpointsCurrentConfig?.itemsPerPage ?? 1;
  const totalPages = Math.ceil(children.length / itemsPerPage);
  const isControlCentered = controlsPosition === 'center';
  const breakpointConfig = getBreakpointConfig(breakpoints);
  const updateCarousel = (newIndex: number) => {
    let newPage;

    if (newIndex >= totalPages) {
      newPage = 0;
    } else if (newIndex < 0) {
      newPage = totalPages - 1;
    } else {
      newPage = newIndex;
    }

    setCurrentPage(newPage);
    onChange?.(newPage);

    const container = childrenRef.current;

    if (!container) return;

    const totalItems = children.length;
    const isLastPage = newPage + 1 >= totalPages;
    const hasRemainingElements = hasRemainingElementsValidation(totalItems, itemsPerPage);

    if (isLastPage && hasRemainingElements && itemsPerPage > 1) {
      const itemWidth =
        (container.offsetWidth - (itemsPerPage - 1) * GAP_BETWEEN_ITEMS) / itemsPerPage;

      let scrollPosition;

      if (newPage === totalPages - 1) {
        scrollPosition =
          (totalItems - itemsPerPage) * (itemWidth + GAP_BETWEEN_ITEMS) -
          GAP_BETWEEN_PAGES * Math.max(totalPages - 2, 0);
      } else if (newPage < 0) {
        scrollPosition = 0;
      } else {
        scrollPosition = newPage * itemsPerPage * (itemWidth + GAP_BETWEEN_ITEMS);
      }

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      return;
    }

    const element = container?.children[newPage] as HTMLElement;

    const scrollPosition = element.offsetLeft - container.offsetLeft;

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  const handleNext = () => {
    updateCarousel(currentPage + 1);
  };

  const handlePrev = () => {
    updateCarousel(currentPage - 1);
  };

  const handleStepClick = (newPage: number) => {
    updateCarousel(newPage);
  };
  return {
    handleNext,
    handlePrev,
    handleStepClick,
    isControlCentered,
    breakpointConfig,
    breakpointsCurrentConfig,
    itemsPerPage,
    totalPages,
  };
}

export function useTouchHandlers(
  carouselInnerRef: React.MutableRefObject<{
    startX: number | undefined;
  }>,
  handleNext: () => void,
  handlePrev: () => void,
) {
  const handleTouchStart = (event: TouchEvent<HTMLDivElement> | undefined) => {
    if (!carouselInnerRef) return;

    carouselInnerRef.current.startX = event?.touches?.[0]?.clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement> | undefined) => {
    const startX = carouselInnerRef.current.startX;
    const endX = event?.changedTouches?.[0]?.clientX;

    if (!startX || !endX) return;

    if (startX > endX + TOUCH_OFFSET) {
      handleNext();
    } else if (startX < endX - TOUCH_OFFSET) {
      handlePrev();
    }
  };
  return { handleTouchStart, handleTouchEnd };
}

const hasRemainingElementsValidation = (totalItems: number, itemsPerPage: number) =>
  totalItems % itemsPerPage >= 1;

export const group = (children: React.ReactNode[], size: number) => {
  if (size === 1) {
    return children;
  }

  const childrenList = [...children];
  const chunkedChildren = [...Array(Math.ceil(childrenList.length / size))].map(() =>
    childrenList.splice(0, size),
  );
  const hasRemainingElements = hasRemainingElementsValidation(children.length, size);

  return React.Children.toArray(
    chunkedChildren.map((childrenGrouped, index) => (
      <CarouselPage
        key={null}
        lastPage={chunkedChildren?.length === index + 1 && hasRemainingElements}
        size={size}
        itemsQuantity={childrenGrouped.length}
      >
        {childrenGrouped}
      </CarouselPage>
    )),
  );
};
