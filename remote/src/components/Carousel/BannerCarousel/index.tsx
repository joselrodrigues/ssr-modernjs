import BannerDisplay from '../BannerDisplay';
import {
  Container,
  ImageContainer,
  Skeleton,
  Wrapper,
} from '../BannerDisplay/index.styles';
import Carousel from '../Carousel';
import { IBanner } from '../BannerDisplay/index.types';
import { useAsyncValue } from '@modern-js/runtime/router';
import { useState } from 'react';

const BANNER_IMAGE = {
  fallback: {
    large: '',
    medium: '',
    small: '',
  },
};

const BannerCarousel = ({ isLoading }: { isLoading?: boolean }) => {
  const nextButtonLabel = 'Siguiente';
  const prevButtonLabel = 'Anterior';
  const stepperOf = 'de';
  const stepperLabel = 'Página';
  const accessibilityLabel = 'Carrusel de banners';
  const loadingLabel = 'Cargando...';
  const [currentPage, setCurrentPage] = useState(0);

  const banners = useAsyncValue() as IBanner[];

  if (isLoading) {
    return (
      <Container priority="normal">
        <Wrapper
          id={`skeleton--banner-carousel`}
          data-testid="banner-skeleton"
          aria-busy={true}
          role="status"
          isOnlyImage={false}
          priority="normal"
        >
          <ImageContainer priority="normal">
            <Skeleton priority="normal" />
          </ImageContainer>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Carousel
      autoSlide
      controlsPosition="center"
      a11yLabel={{
        nextButtonLabel,
        prevButtonLabel,
        stepperLabel,
        stepperOf,
        carouselRegionLabel: accessibilityLabel,
      }}
      breakpoints={{
        medium: { showControls: false },
        small: { showControls: false },
      }}
      onChange={(number: number) => {
        setCurrentPage(number);
      }}
    >
      {banners?.map((banner, index) => (
        <BannerDisplay
          index={index}
          isPromotion={true}
          id="hero"
          key={banner?.id}
          priority="normal"
          loading={isLoading}
          banner={banner}
          wrapperProps={{
            'aria-label': isLoading ? loadingLabel : accessibilityLabel,
            href: banner?.image?.redirect,
          }}
          content={{
            title: banner?.content?.title ?? '',
            subtitle: banner?.content?.subtitle,
            disclaimer: banner?.content?.disclaimer,
            headline: banner?.content?.headline,
            buttonProps: {
              children: banner?.content?.button?.text || '',
              'aria-label': banner?.content?.button?.accessibilityLabel,
              onClick: () => {
                if (banner?.content?.button?.redirect) {
                  window.location.href = banner.content.button.redirect;
                }
              },
            },
          }}
          imageProps={{
            alt: banner?.image?.alt || '',
            fallbackImgSrc: BANNER_IMAGE.fallback,
            imageBySize: {
              large: banner?.image?.sizes?.large || '',
              medium: banner?.image?.sizes?.medium || '',
              small: banner?.image?.sizes?.small || '',
            },
          }}
        />
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
