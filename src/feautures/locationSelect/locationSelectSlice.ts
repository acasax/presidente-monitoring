import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILocationSelect } from './locationSelectModal';
import { RootState } from '../../store/store';

interface InitialState {
  locationData: ILocationSelect[],
  selectedLocationData: any[],
  machineLocationData: ILocationSelect[],
  selectedMachineLocationData: any,
  selectedBestAndWorstLocationData: any
}

const initialState: InitialState = {
  locationData: [],
  selectedLocationData: [],
  machineLocationData: [],
  selectedMachineLocationData: '',
  selectedBestAndWorstLocationData: '',
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
    setSelectedMachineLocation: (state, action: PayloadAction<any>) => {
      state.selectedMachineLocationData = action.payload;
    },
    clearSelectedMachineLocation: (state) => {
      state.selectedMachineLocationData = '';
    },
    setSelectedBestAndWorstLocation: (state, action: PayloadAction<any>) => {
      state.selectedBestAndWorstLocationData = action.payload;
    },
    clearSelectedBestAndWorstLocation: (state) => {
      state.selectedBestAndWorstLocationData = '';
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
  setSelectedMachineLocation,
  clearSelectedMachineLocation,
  setSelectedBestAndWorstLocation,
  clearSelectedBestAndWorstLocation,
} = locationSlice.actions;

export const getSelectLocationData = (state: RootState) => state?.locationSelect?.locationData;
// eslint-disable-next-line max-len
export const getSelectedLocation = (state: RootState) => state?.locationSelect?.selectedLocationData;
// eslint-disable-next-line max-len
export const getSelectMachineLocationData = (state: RootState) => state?.locationSelect?.machineLocationData;
// eslint-disable-next-line max-len
export const getSelectedMachineLocation = (state: RootState) => state?.locationSelect?.selectedMachineLocationData;
// eslint-disable-next-line max-len
export const getSelectedBestAndWorstLocation = (state: RootState) => state?.locationSelect?.selectedBestAndWorstLocationData;

export default locationSlice.reducer;
