import type { UserResto } from '@/types/user';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { User } from '../types';

interface UserState {
  currentUser: UserResto | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk<UserResto, string>(
  'user/fetchUser',
  async (id) => {
    const res = await fetch(`/api/user/${id}`);
    return await res.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch user';
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
