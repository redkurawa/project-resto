// // selectors/cartSelectors.ts
// // import { RootState } from '../../store';

// import type { RootState } from './store';

// export const selectCartWithDetails = (state: RootState) => {
//   // const user = state.user;
//   const user = state.auth.user;
//   // const menuItems = state.menu.items;
//   const menuItems = state.menus.items;

//   // const cartItems = state.cart.items.filter((item) => item.userId === user.id);
//   const cartItems = user
//     ? state.cart.items.filter((item) => item.userId === user.id)
//     : [];

//   return cartItems.map((item) => {
//     const menu = menuItems.find((m) => m.id === item.menuId);
//     return {
//       userId: user?.id,
//       userName: user?.name,
//       menuId: menu?.id,
//       menuName: menu?.foodName,
//       price: menu?.price,
//       quantity: item.quantity,
//       total: (menu?.price ?? 0) * item.quantity,
//     };
//   });
// };

// selectors/cartSelectors.ts
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';
// import { RootState } from '../../store';

export const selectCartWithDetails = createSelector(
  [
    (state: RootState) => state.auth.user,
    (state: RootState) => state.menus.items,
    (state: RootState) => state.cart.items,
  ],
  (user, menuItems, cartItems) => {
    if (!user?.id) return [];

    return cartItems
      .filter((item) => item.userId === user.id)
      .map((item) => {
        const menu = menuItems.find((m) => m.id === item.menuId);
        return {
          userId: user.id,
          userName: user.name,
          menuId: menu?.id ?? '',
          menuName: menu?.foodName ?? '',
          menuImg: menu?.image,
          price: menu?.price ?? 0,
          quantity: item.quantity,
          total: (menu?.price ?? 0) * item.quantity,
        };
      });
  }
);
