import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../api/userApi';

export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await login(email, password);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
