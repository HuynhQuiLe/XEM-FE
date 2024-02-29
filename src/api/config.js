import axios from "axios";
import { setMinusLoadingOff, setMinusLoadingOn } from "../redux/minusLoadingSlice";
import { store } from "../redux/configStore";
import { authSer } from "./api";
import { tokenLocalStorage } from "./localStorage";
import { setIsLoginAgain } from "../redux/authSlice";


let token = store.getState().authSlice.token

export const BASE_URL = "http://localhost:3001/";


// http make loading small circle
export const https_minus = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

https_minus.interceptors.request.use(
  (config) => {
    store.dispatch(setMinusLoadingOn());
    return config;
  },
  (err) => {
    store.dispatch(setMinusLoadingOff());
    return Promise.reject(err);
  }
);

https_minus.interceptors.response.use(
  (res) => {
    store.dispatch(setMinusLoadingOff());
    return res;
  },
  (err) => {
    store.dispatch(setMinusLoadingOff());

    if(tokenLocalStorage.get() && err.response.data.content === "TokenExpiredError") {
      store.dispatch(setIsLoginAgain(true))
    }

    return Promise.reject(err);
  }
);



// http chung chung - no loading effect
export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

https.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

https.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if(tokenLocalStorage.get() && err.response.data.content === "TokenExpiredError") {
      store.dispatch(setIsLoginAgain(true))
    }

    return Promise.reject(err);
  }
);