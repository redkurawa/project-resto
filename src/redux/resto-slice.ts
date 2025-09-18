import { GetService } from '@/services/service';
import type { Restaurant } from '@/types/resto2';
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

interface RestoState {
  data: {
    restaurants: Restaurant[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  } | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: RestoState = {
  data: null,
  loading: 'idle',
  error: null,
};

export const getResto = createAsyncThunk(
  'restos/getResto',
  async (_, { rejectWithValue }) => {
    try {
      const response: any = await GetService('resto');
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue('Gagal mengambil data restoran.');
    }
  }
);

const restoSlice = createSlice({
  name: 'restos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getResto.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getResto.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getResto.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default restoSlice.reducer;
