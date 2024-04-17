import { useEffect } from "react";
import { notificationLocalStorage, tokenLocalStorage } from "../api/localStorage";
import { notify } from "../utils/notify/notify";

const Private = ({ children }) => {
  let  user  = tokenLocalStorage.get() ? true : false
  useEffect(() => {
    if (!user) {
      notificationLocalStorage.set('Vui lòng đăng nhập để tiếp tục')
      return history.back()
    }
   
  },[])

  return children
};

export default Private;
