// hooks.ts
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useMenuSelector = () =>
  useSelector((state: RootState) => state.menu.menus);
export const useAppDispatch = () => useDispatch<AppDispatch>();
