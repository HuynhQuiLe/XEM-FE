import { useEffect } from "react";
import { tokenLocalStorage } from "../api/localStorage";
import { notify } from "../utils/notify/notify";

const Private = ({ children }) => {
  let  user  = tokenLocalStorage.get()
  useEffect(() => {
    if (!user) {
      notify.success('Vui lòng đăng nhập để tiếp tục')
      return history.back()
    }
   
  },[])

  return children
};

export default Private;
