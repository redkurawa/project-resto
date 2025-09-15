// auth-slice.ts

import { PostService } from '@/services/service';
import type { AuthState, LoginPayload, LoginRequest } from '@/types/user';
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';
// import axios from 'axios';

// Definisikan state awal dengan tipe `AuthState`
const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

// Buat async thunk untuk login dengan tipe yang kuat
export const loginUser = createAsyncThunk<
  LoginPayload, // Tipe data yang akan dikembalikan dari fulfilled action
  LoginRequest, // Tipe data yang akan diterima sebagai argumen
  { rejectValue: any } // Tipe untuk error yang ditolak
>('auth/login', async (userData: LoginRequest, { rejectWithValue }) => {
  try {
    // const response = await axios.post(
    //   'https://foody-api-xi.vercel.app/api/auth/login',
    //   userData
    // );
    const r = await PostService('auth/login', userData);
    console.log(r.data.data);
    return r.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

// Buat slice otentikasi
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action untuk logout, tidak perlu payload
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<LoginPayload>) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
