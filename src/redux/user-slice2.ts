// redux/user-slice.ts
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

// interface LoginResponse {
//   message: string;
//   token: string;
//   user: User;
// }

interface LoginResponse {
  data: {
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
      phone: string;
    };
  };
  message: string;
}

interface UserState {
  currentUser: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  token: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  LoginResponse,
  { email: string; password: string },
  { rejectValue: string }
>('user/loginUser', async (payload, { rejectWithValue }) => {
  console.log({ payload });
  try {
    const res = await fetch('https://foody-api-xi.vercel.app/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    // if (!res.ok) throw new Error('Login failed');
    // console.log('Response status:', res.status);
    // const json = await res.json();
    // console.log('Response JSON:', json);
    // return await res.json();
    console.log('user-slice2.tsx Response status:', res.status);
    if (!res.ok) {
      const errorData = await res.json();
      console.log('Error response JSON:', errorData);
      return rejectWithValue(errorData.message || 'Login failed');
    }
    // return await res.json();
    const json = await res.json();
    console.log('Success response JSON:', json);
    return json;
  } catch (err: any) {
    // return rejectWithValue(err.message);
    console.error('Caught error in thunk:', err);
    return rejectWithValue(err.message || 'Unexpected error');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.currentUser = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.token = action.payload.data.token;
          state.currentUser = action.payload.data.user;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
