import { https, https_minus } from "./config";

export const authSer = {
    checkDuplicateEmail: (user) =>  https_minus.post('/auth/register-check-duplicate', user),
    createVerificationCode: (data) =>  https_minus.post("auth/verification-create", data),
    checkVerificationCode: (data) =>  https_minus.post("auth/verification-check", data),
    updateVerificationCode: (data) =>  https_minus.patch("auth/verification-update", data),
    register: (user) => https_minus.post("auth/register", user),
    login: (user) => https_minus.post("auth/login", user),
    checkPassword: (pass_word) => https_minus.post("auth/check-password", pass_word),
    // logout: () => https_minus.post("auth/logout"),

    // refreshToken: () => https_minus.post("auth/refresh-token"),

}

export const userSer = {
    getUrl: () => https.get('/user/get-url'),
    getProfile: () => https.get('/user/get-profile'),
    getAvatar: () => https.get('/user/get-avatar'),
    getPublicProfile: () => https.get('/user/get-public-profile'),
    getEmail: () => https.get('/user/get-email'),
   //update
    updatePublicProfile: (user) => https_minus.patch('user/update-public-profile', user),
    updateEmail: (email) => https_minus.patch('user/update-email', email),
    updatePassword: (password) => https_minus.patch('user/update-password', password),
}

export const roleSer = {
    getAllRoles: () => https.get('/roles/get-all'),
}


export const uploadSer = {
    avatar: (avatar) => https_minus.post('/upload/avatar', avatar),
}