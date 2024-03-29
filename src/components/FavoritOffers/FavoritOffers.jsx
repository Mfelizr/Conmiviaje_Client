import { Flex } from "@chakra-ui/react"
import React from "react"
import Title from "../Title/Title"
import OfferGrid from "../OfferGrid/OfferGrid"

const FavoriteOffers = ({ favoriteOffers }) => {
    console.log("Favoritas:", favoriteOffers)
  return (
    <Flex flexDir={"column"} gap={"80px"}>
      <Title fontSize={"32px"}>Tus Ofertas Favoritas:</Title>
      <OfferGrid offers={favoriteOffers} />
    </Flex>
  )
}
export default FavoriteOffers