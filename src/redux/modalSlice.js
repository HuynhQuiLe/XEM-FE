import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpenedModalLogin: false,
    isOpenedModalSignup: false
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setIsOpenedModalLogin: (state, action) => {
        state.isOpenedModalLogin = true
        state.isOpenedModalSignup = false

    },
    setIsOpenedModalSignup:(state, action) => {
        state.isOpenedModalLogin = false
        state.isOpenedModalSignup = true
    },
    closeModal:(state, action) => {
        state.isOpenedModalLogin = false
        state.isOpenedModalSignup = false
    }
  }
});

export const {setIsOpenedModalLogin, setIsOpenedModalSignup, closeModal} = modalSlice.actions

export default modalSlice.reducer