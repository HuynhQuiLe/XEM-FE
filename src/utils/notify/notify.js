import { notificationLocalStorage } from "../../api/localStorage";
import { store } from "../../redux/configStore";
import { hideSuccess, success } from "../../redux/notificationSlice";

export const notify = {
    success: (message) => {
        store.dispatch(success(message))

        setTimeout(() => {
            store.dispatch(hideSuccess(message))
            notificationLocalStorage.remove()
        },4000)
    }
}