export const tokenLocalStorage = {
    get: () =>
      localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : null,
    set: (token) => {
      const dataJson = JSON.stringify(token);
      localStorage.setItem("token", dataJson);
    },
    remove: () => {
      localStorage.removeItem("token");
    },
  };


  export const userSignupLocalStorage = {
    get: () =>
      localStorage.getItem("userSignup")
        ? JSON.parse(localStorage.getItem("userSignup"))
        : null,
    set: (userSignup) => {
      const dataJson = JSON.stringify(userSignup);
      localStorage.setItem("userSignup", dataJson);
    },
    remove: () => {
      localStorage.removeItem("userSignup");
    },
  };

  export const confirmPasswordLocalStorage = {
    get: () =>
      localStorage.getItem("confirmPassword")
        ? JSON.parse(localStorage.getItem("confirmPassword"))
        : null,
    set: (message) => {
      const dataJson = JSON.stringify(message);
      localStorage.setItem("confirmPassword", dataJson);
    },
    remove: () => {
      localStorage.removeItem("confirmPassword");
    },
  };


  export const notificationLocalStorage = {
    get: () =>
      localStorage.getItem("notification")
        ? JSON.parse(localStorage.getItem("notification"))
        : null,
    set: (message) => {
      const dataJson = JSON.stringify(message);
      localStorage.setItem("notification", dataJson);
    },
    remove: () => {
      localStorage.removeItem("notification");
    },
  };