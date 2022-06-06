import axios from '../../chat-app/node_modules/axios'

export const axiosInstance = axios.create({
    baseURL : "https://chatappwhatsup.herokuapp.com/"
})