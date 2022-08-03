import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILocationSelect } from './locationSelectModal';
import { RootState } from '../../store/store';

interface InitialState {
  locationData: ILocationSelect[],
  selectedLocationData: any[],
  machineLocationData: ILocationSelect[],
  selectedMachineLocationData: String[],
}

const initialState: InitialState = {
  locationData: [],
  selectedLocationData: [],
  machineLocationData: [],
  selectedMachineLocationData: [],
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
    setSelectMachineLocationData: (state, action: PayloadAction<ILocationSelect[]>) => {
      state.machineLocationData = action.payload;
    },
    clearSelectMachineLocationData: (state) => {
      state.machineLocationData = [];
    },
    setMachineSelectedLocation: (state, action: PayloadAction<String[]>) => {
      state.selectedMachineLocationData = action.payload;
    },
    clearMachineSelectedLocation: (state) => {
      state.selectedMachineLocationData = [];
    },
  },
});

export const {
  setSelectLocationData,
  clearSelectLocationData,
  setSelectedLocation,
  clearSelectedLocation,
  setSelectMachineLocationData,
  clearSelectMachineLocationData,
  setMachineSelectedLocation,
  clearMachineSelectedLocation,
} = locationSlice.actions;

export const getSelectLocationData = (state: RootState) => state?.locationSelect?.locationData;
// eslint-disable-next-line max-len
export const getSelectedLocation = (state: RootState) => state?.locationSelect?.selectedLocationData;
// eslint-disable-next-line max-len
export const getSelectMachineLocationData = (state: RootState) => state?.locationSelect?.machineLocationData;
// eslint-disable-next-line max-len
export const getMachineSelectedLocation = (state: RootState) => state?.locationSelect?.selectedMachineLocationData;

export default locationSlice.reducer;
