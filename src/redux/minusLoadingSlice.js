import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: 0,
}

const minusLoadingSlice = createSlice({
  name: 'minusLoadingSlice',
  initialState,
  reducers: {
    setMinusLoadingOn: (state) => {
        state.isLoading += 1;
    },

    setMinusLoadingOff: (state) => {

    state.isLoading < 1 ? state.isLoading = 0 : state.isLoading -= 1;
    },
  }
});

export const {setMinusLoadingOn, setMinusLoadingOff} = minusLoadingSlice.actions

export default minusLoadingSlice.reducer