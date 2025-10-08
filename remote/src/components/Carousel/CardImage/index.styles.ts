import styled from '@emotion/styled';
import { Box, Text, Heading } from 'theme-ui';

export const ContentContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  position: relative;
  z-index: 3;
`;

export const Gradient = styled.div`
  background: linear-gradient(147.38deg, rgb(0 0 0 / 80%) 0%, rgb(0 0 0 / 0%) 100%);
  border-radius: 24px;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const Image = styled.img`
  border-radius: 24px;
  height: 100%;
  left: 0;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const Wrapper = styled.div<{
  size: 'small' | 'medium';
  loading: boolean;
  cursosPointer: boolean;
}>`
  ${({ loading }) => (loading ? 'background-color: #FFFFFF;' : '')}
  border-radius: 24px;
  height: ${({ size }) => (size === 'small' ? '320px' : '500px')};
  max-width: 624px;
  min-width: 288px;
  padding: 32px;
  position: relative;
  ${({ cursosPointer }) =>
    cursosPointer
      ? `
    &:hover {
    cursor: pointer;
  }`
      : ''}
`;

export const Label = styled(Heading)`
  color: white;
  text-shadow: 1px 2px 2px #00000038;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const CardText = styled(Heading)`
  color: white;
  text-shadow: 1px 2px 2px #00000038;
  font-size: 1.5rem;
  font-weight: 300;
`;

export const CtaLabel = styled(Label)``;

export const BoxContent = styled.div``;

export const BoxContentCta = styled(BoxContent)`
  display: flex;
  gap: 9px;
  position: relative;
  top: 16px;
`;

export const IconSkeleton = styled(Box)<{
  size: 'small' | 'large';
}>`
  border-radius: 8px;
  height: ${({ size }) => (size === 'small' ? '24px' : '32px')};
  width: ${({ size }) => (size === 'small' ? '24px' : '32px')};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const TextSkeleton = styled(Box)<{
  useAllWidth?: boolean;
}>`
  ${({ useAllWidth }) => useAllWidth && 'width: 100%;'}
  height: 24px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
