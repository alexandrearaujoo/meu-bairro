import axios from "axios";

const api = axios.create({
    baseURL: 'https://meu-bairro-api.herokuapp.com/'
})

export default api