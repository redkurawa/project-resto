// hooks.ts // file ini belum dipakai langsung tulis di detail2.tsx
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// export const useMenuSelector = () =>
//   useSelector((state: RootState) => state.menu.menus);
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useMenuSelector = () =>
  useSelector((state: RootState) => state.menus.items);
export const useAppDispatch = () => useDispatch<AppDispatch>();
