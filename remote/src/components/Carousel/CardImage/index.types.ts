interface CustomImageProps {
  src: string;
  fallbackImgSrc: string;
}

export interface CardImageProps {
  testId?: string;
  size: 'small' | 'medium';
  type?: 'default' | 'image';
  isLoading: boolean;
  label?: string;
  text?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  showCta?: boolean;
  ctaLabel?: string;
  image: Omit<React.JSX.IntrinsicElements['img'], 'src'> & CustomImageProps;
  onCtaClick?: () => void;
}
