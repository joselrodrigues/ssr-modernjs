import { MouseEvent } from 'react';
import { Button } from 'theme-ui';
import {
  ActionContainer,
  Container,
  ContentContainer,
  Disclaimer,
  Headline,
  Image,
  ImageContainer,
  Skeleton,
  Subtitle,
  TextContainer,
  Title,
  Wrapper,
} from './index.styles';
import { BannerDisplayProps } from './index.types';

const BannerDisplay = ({
  index,
  banner,
  id,
  imageProps,
  content,
  wrapperProps,
  loading,
  ref,
  priority,
  isPromotion = false,
}: BannerDisplayProps) => {
  const { fallbackImgSrc, imageBySize, ...remainingImageProps } = imageProps;
  const isOnlyImage = !content?.title;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    content?.buttonProps?.onClick?.(e);
  };

  if (loading) {
    return (
      <Container priority={priority}>
        <Wrapper
          id={`${id}--banner-display`}
          data-testid="banner-skeleton"
          aria-busy={true}
          role="status"
          isOnlyImage={false}
          priority={priority}
          {...wrapperProps}
        >
          <ImageContainer priority={priority}>
            <Skeleton priority={priority} />
          </ImageContainer>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container priority={priority} ref={ref}>
      <Wrapper
        id={`${id}--banner-display`}
        data-testid="banner"
        as={isOnlyImage ? 'a' : 'div'}
        role={isOnlyImage ? 'link' : 'group'}
        isOnlyImage={isOnlyImage}
        priority={priority}
        {...wrapperProps}
      >
        <ImageContainer priority={priority}>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={imageBySize.large}
            />
            <source
              media="(min-width: 768px)"
              srcSet={imageBySize.medium}
            />

            <Image
              {...remainingImageProps}
              src={imageBySize.small}
              alt={remainingImageProps.alt || 'Banner image'}
              priority={priority}
              sizes="100vw"
            />
          </picture>
        </ImageContainer>

        {!isOnlyImage && (
          <ContentContainer priority={priority}>
            <TextContainer>
              {!!content?.headline && (
                <Headline>
                  {content?.headline}
                </Headline>
              )}

              <Title as="h2" {...content.titleProps}>
                {content?.title}
              </Title>

              {!!content?.subtitle && (
                <Subtitle>{content?.subtitle}</Subtitle>
              )}
            </TextContainer>

            <ActionContainer>
              {!!content?.buttonProps?.children && (
                <Button
                  variant="success"
                  {...content?.buttonProps}
                  onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}
                >
                  {content?.buttonProps?.children}
                </Button>
              )}

              {!!content?.disclaimer && (
                <Disclaimer>{content?.disclaimer}</Disclaimer>
              )}
            </ActionContainer>
          </ContentContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default BannerDisplay;
