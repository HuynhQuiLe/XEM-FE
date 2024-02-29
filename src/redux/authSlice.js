import { createSlice } from '@reduxjs/toolkit'
import {tokenLocalStorage, confirmPasswordLocalStorage} from '../api/localStorage';

const initialState = {
  token: tokenLocalStorage.get() || null,
  isConfirm: confirmPasswordLocalStorage.get() ? confirmPasswordLocalStorage.get() : false,
  isLoginAgain: false,
  userLogin: {
    email: '',
    pass_word: ''
  },
  userLoginErr: {
    email: '',
    pass_word: ''
  },
  errAPI: '',
  userSignup: {
    full_name:'',
    email: '',
    pass_word: '',
    re_pass_word: ''
  },
  userSignupErr: {
    full_name:'',
    email: '',
    pass_word: '',
    re_pass_word: ''

  },
  checkBox: {
    email: false,
    term: false
  },
  errCheckBox: ''

}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userLogin = {...state.userLogin, ...action.payload}
    },
    setUserLoginErr: (state, action) => {
      state.userLoginErr = {...state.userLoginErr, ...action.payload}
    },
    setErrAPI: (state, action) => {
      state.errAPI = action.payload
    },
    setUserSignup: (state, action) => {
      state.userSignup = {...state.userSignup, ...action.payload}
    },
    setUserSignupErr: (state, action) => {
      state.userSignupErr = {...state.userSignupErr, ...action.payload}
    },
    setCheckBox: (state, action) => {
      state.checkBox = {...state.checkBox, ...action.payload}
    },
    setErrCheckBox: (state, action) => {
      state.errCheckBox = action.payload
    },
    setToken:  (state, action) => {
      state.token = action.payload
    },
    setIsLoginAgain:  (state, action) => {
      state.isLoginAgain = action.payload
    },
    setConfirm: (state, action) => {
      state.isConfirm = action.payload
  }
  }
});

export const {
  setUserLogin, 
  setUserLoginErr, 
  setErrAPI, 
  setUserSignup, 
  setUserSignupErr, 
  setCheckBox, 
  setErrCheckBox, 
  setToken,
  setIsLoginAgain,
  setConfirm
} = authSlice.actions

export default authSlice.reducer