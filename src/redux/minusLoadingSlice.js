import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

const minusLoadingSlice = createSlice({
  name: 'minusLoadingSlice',
  initialState,
  reducers: {
    setMinusLoadingOn: (state) => {
        state.isLoading = true;
    },

    setMinusLoadingOff: (state) => {

     state.isLoading = false;
    },
  }
});

export const {setMinusLoadingOn, setMinusLoadingOff} = minusLoadingSlice.actions

export default minusLoadingSlice.reducer