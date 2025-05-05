import { User } from '../../../types/user.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '@/types/auth.type';

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isLoggedIn: !!localStorage.getItem('token'), // 로그인 여부
  user: null // 로그인한 사용자 정보
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('token', action.payload);
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('token');
    }
  }
});

export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
