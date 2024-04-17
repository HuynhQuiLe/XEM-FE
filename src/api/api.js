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
    checkAdmin: () => https_minus.patch('user/check-admin'),

    // get 10 new members

    getTenNewMembers :() => https_minus.get('user/get-ten-new-members')

}

export const roleSer = {
    getAllRoles: () => https.get('/roles/get-all'),
}


export const filmSer = {
    getAllFilms: () => https.get('film/get-all'),
    addFilm: (filmObj) => https_minus.post('film/create', filmObj),
}

export const sessionSer = {
    addSession: (sessionObj) => https_minus.post('session/create', sessionObj),
    getAllLatestSession: () => https_minus.get('session/get-all-latest'),
    getHighestViewSession: () => https_minus.get('session/get-highest-views'),
    getDetails: (url) => https_minus.get(`session/get-details/${url}`),
    getSessionByFilm: (film_id) => https_minus.get(`session/get-session-by-film/${film_id}`),
}

export const episodeSer = {
    addEpisode: (episodeObj) => https_minus.post('episode/create', episodeObj),
    getEpisodeBySession: (session_id) => https_minus.get(`episode/get-episode-by-session/${session_id}`),
    getEpisodeByUrlAndEpisodeName: (url, episode_name) => https_minus.get(`episode/get-episode-by-url-and-episode-name/${url}/${episode_name}`),
    getLatestEpisode: (session_id) => https_minus.get(`episode/get-latest-episode/${session_id}`),
    getEpisodeByID: (episode_id) => https_minus.get(`episode/get-episode-by-id/${episode_id}`),


}

export const viewSer = {
    increaseTotalView: (url) => https_minus.post(`view/increase-total-view/${url}`),
}

export const historySer = {
    addHistory: (session_id, episode_id) => https_minus.post(`history/create/${session_id}/${episode_id}`),
    getHistoryList: () => https_minus.get(`history/get-history-list-by-user`),
}

export const statusFilmSer = {
    getStatusFilmList: () => https_minus.get(`status-film/get-all-list`),
}


export const followFilmSer = {
    follow: (session_id) => https_minus.post(`follow-film/${session_id}`),
    getIsFollowed: (session_id) => https_minus.get(`follow-film/get-is-followed/${session_id}`),
    getFollowListByUser: () => https_minus.get(`follow-film/get-follow-list-by-user/`),
}


export const notificationSer = {
    getListByUser: () => https_minus.get('notification/get-all-by-user'),
    getTotalNumberOfNotiByUser: () => https_minus.get('notification/get-total-number-of-noti-by-user'),
    getNewNumberOfNotiByUser: () => https_minus.get('notification/get-new-number-of-noti-by-user'),
    readNotification: (notification_id) => https_minus.patch(`notification/read/${notification_id}`)
}

export const commentSer = {
    getAllCommentsBySession: (session_id) => https_minus.get(`comment-film/get-all-comments-by-session/${session_id}`),
    createComment: (session_id, data) => https_minus.post(`comment-film/create-comment/${session_id}`, data),
    responseComment: (comment_id, data) => https_minus.post(`comment-film/response-comment/${comment_id}`, data),

    getHearts: (comment_id) => https.get(`comment-film/get-hearts/${comment_id}`),
    increaseHeart: (comment_id) => https.patch(`comment-film/increase-heart/${comment_id}`),
    // response
    getHeartsResponse: (response_id) => https.get(`comment-film/get-hearts-response/${response_id}`),
    increaseHeartResponse: (response_id) => https.patch(`comment-film/increase-heart-response/${response_id}`),
}

