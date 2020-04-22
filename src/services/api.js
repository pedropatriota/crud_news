import axios from 'axios'

const api = axios.create({
    baseURL:'https://5e9bd8f610bf9c0016dd21e0.mockapi.io/api',
})

export default api;