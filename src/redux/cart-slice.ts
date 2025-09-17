// features/cart/cartSlice.ts
import type { CartItem } from '@/types/cart';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        userId: number;
        menuId: number;
        quantity?: number;
      }>
    ) => {
      const { userId, menuId, quantity = 1 } = action.payload;
      const existing = state.items.find(
        (item) => item.userId === userId && item.menuId === menuId
      );
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ userId, menuId, quantity });
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ userId: number; menuId: number }>
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.userId === action.payload.userId &&
            item.menuId === action.payload.menuId
          )
      );
    },
    incrementQuantity: (
      state,
      action: PayloadAction<{ userId: number; menuId: number }>
    ) => {
      const { userId, menuId } = action.payload;
      const existing = state.items.find(
        (item) => item.userId === userId && item.menuId === menuId
      );
      if (existing) {
        existing.quantity += 1;
      }
    },
    // Reducer untuk mengurangi kuantitas
    decrementQuantity: (
      state,
      action: PayloadAction<{ userId: number; menuId: number }>
    ) => {
      const { userId, menuId } = action.payload;
      const existing = state.items.find(
        (item) => item.userId === userId && item.menuId === menuId
      );
      if (existing) {
        existing.quantity -= 1;
        // Hapus item dari keranjang jika kuantitasnya menjadi 0 atau kurang
        if (existing.quantity <= 0) {
          state.items = state.items.filter((item) => item.menuId !== menuId);
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
