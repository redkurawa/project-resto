export type MenuType = 'main' | 'side' | 'drink' | 'dessert';
export const menuTypes: MenuType[] = ['main', 'side', 'drink', 'dessert'];

export interface MenuItem {
  id: number;
  foodName: string;
  price: number;
  type: MenuType;
  image: string;
}
