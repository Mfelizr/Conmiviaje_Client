import offerService from "../../services/offers.services"

const LoaderOffersPage = async () => {
  const resOffers = await offerService.getActiveOffers()

  return resOffers
}

export default LoaderOffersPage