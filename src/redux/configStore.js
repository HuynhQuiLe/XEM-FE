import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import modalSlice from './modalSlice'
import minusLoadingSlice from './minusLoadingSlice'
import notificationSlice from './notificationSlice'


export const store = configureStore({
  reducer: { authSlice, modalSlice, minusLoadingSlice, notificationSlice },
});
