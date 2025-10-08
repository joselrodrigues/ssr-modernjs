import { IBanner } from '@/components/Carousel/BannerDisplay/index.types';

const DEFAULT_BANNERS: IBanner[] = [
  {
    id: '1',
    image: {
      sizes: {
        small: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=640&h=800&fit=crop',
        medium: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1024&h=576&fit=crop',
        large: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=600&fit=crop',
      },
      alt: 'LATAM Pass - Transfiere puntos y vuela a tu destino',
      redirect: '#transfer',
    },
    content: {
      title: 'Transfiere puntos del banco y conviértelos en millas',
      subtitle: 'Transforma puntos en viajes con LATAM Pass',
      headline: 'Transferencia de Puntos',
      button: {
        text: 'Transferir puntos',
        redirect: '#transfer',
      },
    },
    analytics: {
      creative: 'web-latampass_home-hero',
      name: 'HERO-Transfer',
    },
  },
  {
    id: '2',
    image: {
      sizes: {
        small: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=640&h=800&fit=crop',
        medium: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1024&h=576&fit=crop',
        large: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&h=600&fit=crop',
      },
      alt: 'LATAM Pass - Compra millas y viaja más',
      redirect: '#buy-miles',
    },
    content: {
      title: 'Compra Millas LATAM Pass y llega más rápido a tu destino',
      subtitle: 'Adquiere millas extras para tu próxima aventura',
      headline: 'Compra de Millas',
      button: {
        text: 'Comprar millas',
        redirect: '#buy-miles',
      },
    },
    analytics: {
      creative: 'web-latampass_home-hero',
      name: 'HERO-BuyMiles',
    },
  },
  {
    id: '3',
    image: {
      sizes: {
        small: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=640&h=800&fit=crop',
        medium: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1024&h=576&fit=crop',
        large: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=600&fit=crop',
      },
      alt: 'LATAM Pass - Descubre experiencias únicas',
      redirect: '#shopping',
    },
    content: {
      title: 'Canjea tus millas en el shopping LATAM Pass',
      subtitle: 'Descubre productos y experiencias increíbles',
      headline: 'Shopping LATAM Pass',
      button: {
        text: 'Ir al shopping',
        redirect: '#shopping',
      },
    },
    analytics: {
      creative: 'web-latampass_home-hero',
      name: 'HERO-Shopping',
    },
  },
];

const fakeApi = (): Promise<IBanner[]> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(DEFAULT_BANNERS), 1000);
  });

export const getCarouselBanners = (): Promise<IBanner[]> => {
  return fakeApi();
};