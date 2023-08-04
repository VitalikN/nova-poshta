import { createSlice } from '@reduxjs/toolkit';
import { fetchTtn } from './ttn-operations';

const initialState = {
  ttn: [],
  ttnList: [],
  queryTtn: '',
  isLoading: false,
  error: null,
};

const ttnSlice = createSlice({
  name: 'ttn',
  initialState: initialState,
  reducers: {
    saveTtn: (state, action) => {
      if (!state.ttnList.some(ttn => ttn === action.payload)) {
        state.ttnList = [...state.ttnList, action.payload];
      }
    },
    setQueryTtn: (state, action) => {
      state.queryTtn = action.payload;
    },
    deleteQueryTtn: (state, action) => {
      state.ttnList = state.ttnList.filter(ttn => ttn !== action.payload);
    },
    deleteAllSavedTtn: state => {
      state.ttnList = [];
      state.queryTtn = '';
      state.ttnList = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTtn.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTtn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ttn = action.payload;
      })
      .addCase(fetchTtn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { saveTtn } = ttnSlice.actions;
export const { setQueryTtn } = ttnSlice.actions;
export const { deleteQueryTtn } = ttnSlice.actions;
export const { deleteAllSavedTtn } = ttnSlice.actions;

export const ttnReducer = ttnSlice.reducer;