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

export interface MenuItem {
  id: number;
  foodName: string;
  price: number;
  type: 'main' | 'side' | 'drink' | 'dessert';
  image: string;
}
