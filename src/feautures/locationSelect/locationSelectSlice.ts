import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILocationSelect } from './locationSelectModal';
import { RootState } from '../../store/store';

interface InitialState {
  locationData: ILocationSelect[],
  selectedLocationData: String[]
}

const initialState: InitialState = {
  locationData: [],
  selectedLocationData: [],
};

const locationSlice = createSlice({
  name: 'locationSelect',
  initialState,
  reducers: {
    setSelectLocationData: (state, action: PayloadAction<ILocationSelect[]>) => {
      state.locationData = action.payload;
    },
    clearSelectLocationData: (state) => {
      state.locationData = null;
    },
    setSelectedLocation: (state, action: PayloadAction<String[]>) => {
      state.selectedLocationData = action.payload;
    },
    clearSelectedLocation: (state) => {
      state.selectedLocationData = [];
    },
  },
});

export const {
  setSelectLocationData,
  clearSelectLocationData,
  setSelectedLocation,
  clearSelectedLocation,
} = locationSlice.actions;

export const getSelectLocationData = (state: RootState) => state?.locationSelect?.locationData;
// eslint-disable-next-line max-len
export const getSelectedLocation = (state: RootState) => state?.locationSelect?.selectedLocationData;

export default locationSlice.reducer;
