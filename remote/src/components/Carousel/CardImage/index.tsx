import React from 'react';

const ArrowRight = ({ size }: { size?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 4l6 6-6 6-1.41-1.41L12.17 11H4V9h8.17L8.59 5.41 10 4z" />
  </svg>
);
import {
  BoxContent,
  BoxContentCta,
  ContentContainer,
  CtaLabel,
  Gradient,
  IconSkeleton,
  Image,
  Label,
  CardText,
  TextSkeleton,
  Wrapper,
} from './index.styles';
import { CardImageProps } from './index.types';

const CardImage = ({
  testId,
  size,
  type = 'default',
  isLoading,
  label,
  text,
  showIcon,
  icon,
  showCta,
  ctaLabel,
  image,
  onCtaClick,
  ...props
}: CardImageProps) => {
  const { fallbackImgSrc, src, ...remainingImageProps } = image;

  if (isLoading) {
    return (
      <Wrapper
        tabIndex={0}
        loading={true}
        size={size}
        role="status"
        aria-label="Banner. O conteúdo está sendo carregado."
        data-testid={`card-loading-box-${testId}`}
        cursosPointer={false}
      >
        <ContentContainer>
          <IconSkeleton size="large" />
          <TextSkeleton useAllWidth={true} />
          <TextSkeleton useAllWidth={true} />
          <BoxContentCta>
            <TextSkeleton />
            <IconSkeleton size="small" />
          </BoxContentCta>
        </ContentContainer>
      </Wrapper>
    );
  }

  const getAriaLabel = () => {
    return type === 'default'
      ? `Banner. ${label}, ${text}, ${ctaLabel}. Clique para saber mais.`
      : `Banner. ${image.alt}`;
  };

  return (
    <Wrapper
      tabIndex={0}
      loading={false}
      size={size}
      aria-label={getAriaLabel()}
      role={'button'}
      data-testid={testId}
      onClick={onCtaClick}
      cursosPointer={onCtaClick !== undefined}
      {...props}
    >
      {type === 'default' && <Gradient data-testid="card-image-gradient" />}
      <Image {...remainingImageProps} src={src} />
      {type === 'default' && (
        <ContentContainer>
          {!!showIcon && <BoxContent data-testid="icon-box">{icon}</BoxContent>}
          {!!label && (
            <BoxContent>
              <Label>{label}</Label>
            </BoxContent>
          )}
          {!!text && (
            <BoxContent>
              <CardText>{text}</CardText>
            </BoxContent>
          )}
          {!!showCta && (
            <BoxContentCta data-testid="cta-box">
              {!!ctaLabel && <CtaLabel>{ctaLabel}</CtaLabel>}
              <ArrowRight size="small" />
            </BoxContentCta>
          )}
        </ContentContainer>
      )}
    </Wrapper>
  );
};

export default CardImage;
