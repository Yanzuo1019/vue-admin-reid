import axios from "axios"

const service = axios.create({
    baseURL: "https://mockapi.eolinker.com/IjpR5G3f9a6a1dedc9c7b928ee9fa8bd2a93cf4d4cf9761",
    timeout: 5000
})

export default service
