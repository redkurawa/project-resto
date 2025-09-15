export interface Restaurant {
  id: number;
  name: string;
  place: string;
  logo: string;
  images: string[];
  menuCount: number;
  reviewCount: number;
  star: number;
  priceRange: {
    min: number;
    max: number;
  };
}

export type MenuType = 'main' | 'side' | 'drink' | 'dessert';
export const menuTypes: MenuType[] = ['main', 'side', 'drink', 'dessert'];

export interface MenuItem {
  id: number;
  foodName: string;
  price: number;
  type: MenuType;
  image: string;
}
