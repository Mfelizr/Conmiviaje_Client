import AxiosConfig from "./axios"

class CountryService extends AxiosConfig {
    constructor() {
        super ("countries")        
    }

    async getAllCountries() {
        const response = await this.axios.get('/list')        
        return response.data       
    }
    
    async getOneCountries(id) {
        const response = await this.axios.get(`/getOne/${id}`)        
        return response.data       
    }    
}

const countryService = new CountryService()
export default countryService