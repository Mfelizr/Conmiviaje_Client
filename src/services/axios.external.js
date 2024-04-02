import axios from "axios"

class AxiosConfig {
    constructor(path) {
        this.axios = axios.create(
            {
                baseURL: `https://www.sitata.com/api/v2/${path}`            
            }
        )
    }
}

export default AxiosConfig