import type { MenuItem } from '@/types/resto';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// import { MenuItem } from './menuTypes';

interface MenuState {
  // menus: MenuItem[];
  items: MenuItem[];
}

const initialState: MenuState = {
  items: [],
  // menus: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenus(state, action: PayloadAction<MenuItem[]>) {
      // state.menus = action.payload;
      state.items = action.payload;
    },
    addMenu(state, action: PayloadAction<MenuItem>) {
      // state.menus.push(action.payload);
      state.items.push(action.payload);
    },
    removeMenuById(state, action: PayloadAction<number>) {
      // state.menus = state.menus.filter((menu) => menu.id !== action.payload);
      state.items = state.items.filter((menu) => menu.id !== action.payload);
    },
    clearMenus(state) {
      // state.menus = [];
      state.items = [];
    },
    updateMenu(state, action: PayloadAction<MenuItem>) {
      // const index = state.menus.findIndex(
      const index = state.items.findIndex(
        (menu) => menu.id === action.payload.id
      );
      if (index !== -1) {
        // state.menus[index] = action.payload;
        state.items[index] = action.payload;
      }
    },
  },
});

export const { setMenus, addMenu, removeMenuById, clearMenus, updateMenu } =
  menuSlice.actions;
export default menuSlice.reducer;
