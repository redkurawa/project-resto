import type { Cart } from '@/types/cart';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  carts: Cart[];
}

const initialState: CartState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCarts(state, action: PayloadAction<Cart[]>) {
      state.carts = action.payload;
    },
    addCarts(state, action: PayloadAction<Cart>) {
      state.carts.push(action.payload);
    },
    removeCartById(state, action: PayloadAction<number>) {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
    clearCart(state) {
      state.carts = [];
    },
    updateCart(state, action: PayloadAction<Cart>) {
      const index = state.carts.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (index !== -1) {
        state.carts[index] = action.payload;
      }
    },
  },
});

export const { setCarts, addCarts, removeCartById, clearCart, updateCart } =
  cartSlice.actions;
export default cartSlice.reducer;
