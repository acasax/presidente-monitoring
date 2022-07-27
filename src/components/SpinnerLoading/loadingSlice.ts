import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../store/store';

interface LoadingStatus {
  value: boolean
}

const initialState: LoadingStatus = {
  value: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setLoadingStatus } = loadingSlice.actions;

export const loadingStatus = (state: RootState) => state.loading.value;

export default loadingSlice.reducer;
