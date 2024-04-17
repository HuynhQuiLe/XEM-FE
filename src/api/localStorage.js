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

export const historyLocalStorage = {
  get: () =>
    localStorage.getItem("history")
      ? JSON.parse(localStorage.getItem("history"))
      : null,
  set: (data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem("history", dataJson);
  },
  remove: () => {
    localStorage.removeItem("history");
  },
};

export const heartLocalStorage = {
  get: () =>
    localStorage.getItem("hearts")
      ? JSON.parse(localStorage.getItem("hearts"))
      : null,
  set: (data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem("hearts", dataJson);
  },
  remove: () => {
    localStorage.removeItem("hearts");
  },
};


export const heartResponseLocalStorage = {
  get: () =>
    localStorage.getItem("heartsResponse")
      ? JSON.parse(localStorage.getItem("heartsResponse"))
      : null,
  set: (data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem("heartsResponse", dataJson);
  },
  remove: () => {
    localStorage.removeItem("heartsResponse");
  },
};