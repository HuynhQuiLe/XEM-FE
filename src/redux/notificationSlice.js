import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShow: null,
    isHide: null,
    message:null
}

const notificationSlice = createSlice({
  name: 'notificationSlice',
  initialState,
  reducers: {
    success: (state, action) => {
        state.isShow =  true
        state.isHide =  null
        state.message = action.payload
    },
    hideSuccess: (state, action) => {
        state.isHide =  true 
        state.isShow =  null
        state.message = action.payload
    },
  }
});

export const {success, hideSuccess} = notificationSlice.actions

export default notificationSlice.reducer