import AxiosConfig from "../services/axios.external"

class SitataService extends AxiosConfig {
  constructor() {
    super("entry_requirements")
  }


  async getRequirements(originCountryId, affectedCountryId) {
    //console.log("Organizacion: ", process.env.REACT_APP_STTORG)
    //console.log("TKN: ", process.env.REACT_APP_STTAUT)

    const response = await this.axios.get(`?affected_country_id=${affectedCountryId}&origin_country_id=${originCountryId}`,
        {
            headers: {
                Organization: process.env.REACT_APP_STTORG,
                Authorization: process.env.REACT_APP_STTAUT,
                "Accept-Language": "es"
            },
        }
    )
    return response.data
  }
}

const sitataService = new SitataService()
export default sitataService