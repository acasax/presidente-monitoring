import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './AuthModal';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store/store';

interface InitialState {
  userData: IUser;
}

const initialState: InitialState = {
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.userData = null;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const getToken = (state: RootState) => state?.auth?.userData?.token;
export const getUserData = (state: RootState) => state?.auth?.userData;
export const isLogged = (state: RootState) => state?.auth?.userData?.token;

export default authSlice.reducer;
