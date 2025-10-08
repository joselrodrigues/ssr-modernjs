import { group, useHandlers, useTouchHandlers } from './index.hooks';
import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

// Icon components
const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 16l-6-6 6-6 1.41 1.41L7.83 9H16v2H7.83l3.58 3.59L10 16z" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 4l6 6-6 6-1.41-1.41L12.17 11H4V9h8.17L8.59 5.41 10 4z" />
  </svg>
);

const Pause = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M6 4h3v12H6V4zm5 0h3v12h-3V4z" />
  </svg>
);

const Play = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M5 3l12 7-12 7V3z" />
  </svg>
);

import {
  CarouselContainer,
  CarouselItem,
  CarouselTrack,
  CarouselTrackContainer,
  CarouselViewport,
  NavigationButton,
  NavigationButtons,
  PauseAndPlayButton,
  StepperContainer,
  StepperDot,
} from './index.styles';
import { CarouselProps } from './index.types';

const AUTO_SLIDE_TIME = 10000;

const Carousel = forwardRef(
  (
    {
      children,
      breakpoints,
      autoSlide,
      controlsPosition,
      a11yLabel,
      onChange = () => {},
    }: CarouselProps,
    ref,
  ) => {
    const childrenRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselInnerRef = useRef<{ startX: number | undefined }>({
      startX: undefined,
    });

    const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);
    const [currentAutoSlide, setCurrentAutoSlide] = useState<boolean>(autoSlide);

    const actionPause = 'Pausar';
    const actionPlay = 'Reproducir';
    const label = `${currentAutoSlide ? actionPause : actionPlay} carrusel automático`;

    const {
      handleNext,
      handlePrev,
      handleStepClick,
      isControlCentered,
      breakpointConfig,
      breakpointsCurrentConfig,
      itemsPerPage,
      totalPages,
    } = useHandlers(
      setCurrentPage,
      childrenRef,
      children,
      currentPage,
      controlsPosition,
      breakpoints,
      onChange,
    );
    const { handleTouchStart, handleTouchEnd } = useTouchHandlers(
      carouselInnerRef,
      handleNext,
      handlePrev,
    );

    useEffect(() => {
      if (!currentAutoSlide) {
        if (autoSlideInterval.current) {
          clearInterval(autoSlideInterval.current);
          autoSlideInterval.current = null;
        }
        return;
      }

      autoSlideInterval.current = setInterval(() => {
        handleNext();
      }, AUTO_SLIDE_TIME);

      return () => {
        if (autoSlideInterval.current) {
          clearInterval(autoSlideInterval.current);
          autoSlideInterval.current = null;
        }
      };
    }, [currentAutoSlide, handleNext]);

    const variant = useMemo(
      () => (isControlCentered ? 'primary' : 'utilitary'),
      [isControlCentered],
    );

    return (
      <CarouselContainer
        role="region"
        aria-label={a11yLabel?.carouselRegionLabel}
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        <CarouselTrackContainer onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <CarouselViewport ref={containerRef}>
            <CarouselTrack ref={childrenRef} fullscreen={!!breakpointsCurrentConfig.fullscreen}>
              {React.Children.toArray(
                group(children, itemsPerPage).map((child, index) => (
                  <CarouselItem
                    key={null}
                    width={breakpointsCurrentConfig?.pageWidth}
                    fullscreen={!!breakpointsCurrentConfig.fullscreen}
                    aria-hidden={currentPage !== index}
                    inert={currentPage !== index && ''}
                  >
                    {child}
                  </CarouselItem>
                )),
              )}
            </CarouselTrack>
          </CarouselViewport>

          {totalPages > 1 && (
            <NavigationButtons breakpoints={breakpointConfig} isControlCentered={isControlCentered}>
              <NavigationButton
                id="carousel-left-button"
                onClick={handlePrev}
                variant={variant}
                size="medium"
                role="button"
                aria-label={a11yLabel?.prevButtonLabel}
              >
                <ArrowLeft />
              </NavigationButton>
              <NavigationButton
                id="carousel-right-button"
                onClick={handleNext}
                variant={variant}
                size="medium"
                role="button"
                aria-label={a11yLabel?.nextButtonLabel}
              >
                <ArrowRight />
              </NavigationButton>
            </NavigationButtons>
          )}
        </CarouselTrackContainer>

        {totalPages > 1 && (
          <StepperContainer
            data-testid={'carousel-steppers'}
            breakpoints={breakpointConfig}
            role="tablist"
          >
            {React.Children.toArray(
              Array.from({ length: totalPages }).map((_, index) => (
                <StepperDot
                  key={`stepper-dot-${index}`}
                  tabIndex={-1}
                  active={currentPage === index}
                  onClick={() => handleStepClick(index)}
                  role="tab"
                  aria-selected={currentPage === index}
                  aria-label={`${a11yLabel?.stepperLabel} ${index + 1} ${a11yLabel?.stepperOf} ${totalPages}`}
                />
              )),
            )}
          </StepperContainer>
        )}
      </CarouselContainer>
    );
  },
);

export default Carousel;
