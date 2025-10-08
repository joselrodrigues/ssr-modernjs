import { BannerDisplayPriority as Priority } from './index.types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Box, Text, Heading } from 'theme-ui';

const CONTENT_MAX_WIDTH = 1270;
const CONTAINER_PADDINGS = 96;

const borderRadius = (props: { priority?: Priority }) => css`
  border-radius: ${props.priority === 'compact' ? '1.5rem' : 0};

  @media (min-width: 768px) {
    border-radius: 1.5rem;
  }

  @media (min-width: 1024px) {
    border-radius: 1.5rem;
  }

  @media (min-width: 1440px) {
    border-radius: 1.5rem;
  }
`;

export const Container = styled.div<React.PropsWithRef<{ priority: Priority }>>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${CONTENT_MAX_WIDTH + CONTAINER_PADDINGS}px;
  padding-left: ${({ priority }) => (priority === 'compact' ? '3rem' : 0)};
  padding-right: ${({ priority }) => (priority === 'compact' ? '3rem' : 0)};
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (min-width: 1440px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Wrapper = styled.div<{ isOnlyImage: boolean; priority: Priority }>`
  position: relative;
  ${props => borderRadius(props)}

  ${({ isOnlyImage }) =>
    isOnlyImage &&
    css`
      display: flex;

      &:focus-visible {
        outline: rgb(27 0 136) solid 0.125rem;
        outline-offset: 0.5rem;
      }

      &:hover {
        box-shadow: rgb(48 48 48 / 20%) 0 0.5rem 0.5rem 0;
        color: black;
      }
    `}
`;

export const ContentContainer = styled.div<{ priority: Priority }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${({ priority }) => (priority === 'compact' ? 'flex-end' : 'center')};
  margin: 0 1rem;
  max-width: 100%;
  padding-bottom: ${({ priority }) => (priority === 'compact' ? '1rem' : '0')};
  position: absolute;
  top: 0;
  z-index: 2;

  @media (min-width: 768px) {
    justify-content: center;
    margin: 0 3rem;
    padding-bottom: 0;
  }

  @media (min-width: 1024px) {
    justify-content: center;
    margin: 0 4.5rem;
    max-width: calc(50% - 4.5rem);
    padding-bottom: 0;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.25rem;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ImageContainer = styled.div<{ priority: Priority }>`
  aspect-ratio: ${props => (props.priority === 'compact' ? '4 / 5' : '1 / 1')};
  height: 100%;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    aspect-ratio: ${(props: { priority: Priority }) => (props.priority === 'compact' ? '16 / 5' : '16 / 9')};
  }

  @media (min-width: 1024px) {
    aspect-ratio: ${(props: { priority: Priority }) => (props.priority === 'compact' ? '16 / 3' : '16 / 5')};
  }
`;

export const Image = styled.img<{ priority: Priority }>`
  height: 100%;
  object-fit: cover;
  width: 100%;

  ${props => borderRadius(props)}
`;

export const Skeleton = styled(Box)<{ priority: Priority }>`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;

  ${props => borderRadius(props)};

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const Headline = styled(Text)`
  color: white;
  font-weight: bold;
`;

export const Title = styled(Heading)`
  color: white;
`;

export const Subtitle = styled(Text)`
  color: white;
`;

export const Disclaimer = styled(Text)`
  color: white;
  font-size: 0.875rem;
`;
