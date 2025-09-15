// store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import menuReducer from './menu-slice';
// import userReducer from './user-slice';
// import authReducer from './auth-slice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['auth'], // Hanya slice 'auth' yang akan disimpan
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     menus: menuReducer,
//     user: userReducer,
//     auth: persistedAuthReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import menuReducer from './menu-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    menus: menuReducer,
  },
});

// Definisikan RootState dan AppDispatch dari store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
