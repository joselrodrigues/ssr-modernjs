export interface IBanner {
  id: string;
  analytics?: any;
  content?: {
    title?: string;
    subtitle?: string;
    headline?: string;
    disclaimer?: string;
    button?: {
      text: string;
      accessibilityLabel?: string;
      redirect?: string;
    };
  };
  image?: {
    alt?: string;
    redirect?: string;
    sizes?: {
      large: string;
      medium: string;
      small: string;
    };
  };
}

export interface IBannerFlightSearch extends IBanner {}

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: string;
  [key: string]: any;
}

export interface BannerWithContentBase {
  title: string;
  subtitle?: string;
  titleProps?: { variant?: string; component?: string };
  buttonProps?: ButtonProps & { children: string };
}

interface BannerWithContentNormal extends BannerWithContentBase {
  disclaimer?: string;
  headline?: string;
}

interface BannerWithContentCompact extends BannerWithContentBase {
  disclaimer?: never;
  headline?: never;
}

interface CustomImageProps {
  imageBySize: {
    large: string;
    medium: string;
    small: string;
  };
  fallbackImgSrc?:
    | string
    | {
        large: string;
        medium: string;
        small: string;
      };
}

export type BannerDisplayPriority = 'normal' | 'compact';

export type BannerDisplayProps =
  | {
      index: number;
      banner: IBanner | IBannerFlightSearch;
      priority: 'normal';
      content?: BannerWithContentNormal;
      ref?: React.Ref<HTMLDivElement>;
      id?: string;
      loading?: boolean;
      wrapperProps?: React.HTMLAttributes<HTMLDivElement> & { href?: string };
      imageProps: Omit<React.JSX.IntrinsicElements['img'], 'src'> & CustomImageProps;
      isPromotion?: boolean;
    }
  | {
      index: number;
      banner: IBanner | IBannerFlightSearch;
      priority: 'compact';
      content?: BannerWithContentCompact;
      ref?: React.Ref<HTMLDivElement>;
      id?: string;
      loading?: boolean;
      wrapperProps?: React.HTMLAttributes<HTMLDivElement> & { href?: string };
      imageProps: Omit<React.JSX.IntrinsicElements['img'], 'src'> & CustomImageProps;
      isPromotion?: boolean;
    };
