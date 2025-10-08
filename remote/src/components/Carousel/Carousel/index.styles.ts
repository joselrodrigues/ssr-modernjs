import styled from '@emotion/styled';
import { Box, IconButton } from 'theme-ui';

import { Breakpoints, CarouselItemProps } from './index.types';

const CONTENT_MAX_WIDTH = 1270;
const CONTAINER_PADDINGS = 96;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${CONTENT_MAX_WIDTH + CONTAINER_PADDINGS}px;
  overflow-x: hidden;
  position: relative;
  width: 100%;
`;

export const CarouselTrackContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0;
  position: relative;
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
  padding-left: 0;
  padding-right: 0;
  width: 100vw;
`;

export const CarouselTrack = styled.div<{ fullscreen: boolean }>`
  display: flex;
  gap: ${({ fullscreen }) => (fullscreen ? 0 : 1)}rem;
  overflow: hidden;
`;

export const CarouselItem = styled.div<CarouselItemProps & { fullscreen: boolean }>`
  flex-shrink: 0;
  width: ${props => (props.width ? `${props.width}` : '100%')};
`;

export const CarouselPage = styled.div<
  CarouselItemProps & { lastPage: boolean; size: number; itemsQuantity: number }
>`
  --gap: 2.5rem;
  --padding: 1.5rem;

  align-items: flex-start;
  display: flex;
  gap: var(--gap);
  justify-content: center;

  ${({ lastPage, size, itemsQuantity }) => {
    if (lastPage && size > 1) {
      return `
        width: calc((${itemsQuantity} * ((100% - (${size}  - 1) * var(--gap)) / ${size})) + ((${itemsQuantity} - 1) * var(--gap)) + var(--padding));
        padding-left: var(--padding);
      `;
    }
  }}

  & > * {
    flex: 1;
  }
`;

export const NavigationButtons = styled.div<{
  breakpoints: Breakpoints;
  isControlCentered: boolean;
}>`
  display: flex;
  justify-content: space-between;
  max-width: ${CONTENT_MAX_WIDTH + CONTAINER_PADDINGS}px;
  padding: 5rem;
  pointer-events: none;
  position: absolute;
  visibility: ${({ breakpoints }) => (breakpoints?.small?.showControls ? 'visible' : 'hidden')};
  width: 100%;

  @media (min-width: 1440px) {
    padding: 0.75rem;
  }

  #carousel-left-button,
  #carousel-right-button {
    pointer-events: auto;
  }

  @media (min-width: 768px) {
    visibility: ${({ breakpoints }) => (breakpoints?.medium?.showControls ? 'visible' : 'hidden')};
  }

  @media (min-width: 1024px) {
    visibility: ${({ breakpoints }) => (breakpoints?.large?.showControls ? 'visible' : 'hidden')};
  }
`;

export const StepperContainer = styled.div<{ breakpoints: Breakpoints }>`
  align-items: center;
  align-self: center;
  bottom: 0.5rem;
  display: flex;
  gap: 0.5rem;
  max-width: 9rem;
  position: absolute;
  visibility: ${({ breakpoints }) => (breakpoints?.small?.showSteppers ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 2;

  @media (min-width: 768px) {
    max-width: 18.5rem;
    visibility: ${({ breakpoints }) => (breakpoints?.medium?.showSteppers ? 'visible' : 'hidden')};
  }

  @media (min-width: 1024px) {
    max-width: 30rem;
    visibility: ${({ breakpoints }) => (breakpoints?.large?.showSteppers ? 'visible' : 'hidden')};
  }
`;

export const StepperDot = styled.button<{ active: boolean }>`
  background-color: #333;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  height: 0.375rem;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: background-color 0.2s;
  width: 100%;
`;

export const NavigationButton = styled(IconButton)`
  cursor: pointer;
  background: white;
  border: 2px solid #333;
  border-radius: 50%;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const PauseAndPlayButton = styled(NavigationButton)`
  margin-left: 1rem;
`;
