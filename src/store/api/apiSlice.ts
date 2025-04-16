import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/api/axios';
import { ApiResponse, ErrorResponse } from '../../types';

interface ApiState {
  loading: boolean;
  error: ErrorResponse | null;
  data: unknown;
}

const initialState: ApiState = {
  loading: false,
  error: null,
  data: null
};

export const fetchData = createAsyncThunk('api/fetchData', async (endpoint: string, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<ApiResponse<unknown>>(endpoint);
    return response.data;
  } catch (error: unknown) {
    return rejectWithValue(
      ((error as ErrorResponse).response?.data || { message: '알 수 없는 오류가 발생했습니다.' }) as ErrorResponse
    );
  }
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as ErrorResponse;
      });
  }
});

export const { clearError } = apiSlice.actions;
export default apiSlice.reducer;
