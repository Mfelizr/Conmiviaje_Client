import AxiosConfig from "../services/axios.external"

class SitataService extends AxiosConfig {
  constructor() {
    super("entry_requirements")
  }

  async signup(data) {
    const response = await this.axios.post("/signup", data)
    return response.data
  }

  async login(data) {
    const response = await this.axios.post("/login", data)
    return response.data
  }

  async getRequirements(originCountryId, affectedCountryId) {
    const response = await this.axios.get(`?affected_country_id=${affectedCountryId}&origin_country_id=${originCountryId}`,
        {
            headers: {
                Organization: "fad2ca18-152a-4489-b06d-357bcdf4b619",
                Authorization: "TKN 5e26660a-067f-4195-a68d-c8621d6dbe94",
                "Accept-Language": "es"
            },
        }
    )
    return response.data
  }
}

const sitataService = new SitataService()
export default sitataService