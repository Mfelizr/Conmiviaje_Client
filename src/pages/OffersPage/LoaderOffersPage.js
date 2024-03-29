import offerService from "../../services/offers.services"

const LoaderOffersPage = async () => {
  const resOffers = await offerService.getAllOffers()

  return resOffers
}

export default LoaderOffersPage