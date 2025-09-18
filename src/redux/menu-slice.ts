import type { MenuItem } from '@/types/menu';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  items: MenuItem[];
}

const initialState: MenuState = {
  items: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenus(state, action: PayloadAction<MenuItem[]>) {
      state.items = action.payload;
    },
    addMenu(state, action: PayloadAction<MenuItem>) {
      state.items.push(action.payload);
    },
    removeMenuById(state, action: PayloadAction<number>) {
      state.items = state.items.filter((menu) => menu.id !== action.payload);
    },
    clearMenus(state) {
      state.items = [];
    },
    updateMenu(state, action: PayloadAction<MenuItem>) {
      const index = state.items.findIndex(
        (menu) => menu.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { setMenus, addMenu, removeMenuById, clearMenus, updateMenu } =
  menuSlice.actions;
export default menuSlice.reducer;
