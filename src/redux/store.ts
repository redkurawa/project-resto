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
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from './menu-slice';
import userReducer from './user-slice';
import authReducer from './auth-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Hanya slice 'auth' yang akan disimpan
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    menus: menuReducer,
    user: userReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
