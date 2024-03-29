import AxiosConfig from "./axios"

class OfferService extends AxiosConfig {
    constructor() {
        super ("offers")        
    }

    async getAllOffers() {
        const response = await this.axios.get('/list')        
        return response.data       
    }

    async newOffer(offer) {
        const response = await this.axios.post('/create', offer)    
        console.log("Crear: ", response)         
        return response.data
    }
    
    async getOneOffers(id) {
        const response = await this.axios.get(`/getOne/${id}`)        
        return response.data       
    }
    async updateOffer(id, data) {
        console.log("Update: ", `/${id}`)
        const response = await this.axios.put(`/edit/${id}`, data)                
        return response.data
    }

    async deleteOffer(id) {
        return await this.axios.delete(`/delete/${id}`)                
    } 
}

export default new OfferService()