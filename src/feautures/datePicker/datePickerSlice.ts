import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

interface InitialState {
  mode: string[],
  selectedDates: any[]
}

const initialState: InitialState = {
  mode: ['DAY'],
  selectedDates: [],
};

const datePickerSlice = createSlice({
  name: 'datePicker',
  initialState,
  reducers: {
    setDatePickerMode: (state, action: PayloadAction<string[]>) => {
      state.mode = action.payload;
    },
    clearDatePickerMode: (state) => {
      state.mode = initialState.mode;
    },
    setPickedDate: (state, action: PayloadAction<string[]>) => {
      state.selectedDates = action.payload;
    },
    clearPickedDate: (state) => {
      state.selectedDates = [];
    },
  },
});

export const {
  setDatePickerMode,
  clearDatePickerMode,
  setPickedDate,
  clearPickedDate,
} = datePickerSlice.actions;

export const getDatePickerMode = (state: RootState) => state?.datePicker?.mode;
export const getSelectedDate = (state: RootState) => state?.datePicker?.selectedDates;

export default datePickerSlice.reducer;
