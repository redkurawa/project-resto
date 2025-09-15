// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './slices/userSlice';
// import restoReducer from './slices/restoSlice';
// import menuReducer from './slices/menuSlice';
// import reviewReducer from './slices/reviewSlice';

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     resto: restoReducer,
//     menu: menuReducer,
//     review: reviewReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// store.ts
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';

export const store = configureStore({
  reducer: {
    menus: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
