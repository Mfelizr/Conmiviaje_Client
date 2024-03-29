import React from "react"
import PageWrapper from "../../components/PageWrapper/PageWrapper"
import { Flex } from "@chakra-ui/layout"
import Title from "../../components/Title/Title"
import OffersGrid from "../../components/OfferGrid/OfferGrid"
import { useLoaderData } from "react-router-dom"

function OffersPage() {

  const offers = useLoaderData()

  return (
    <PageWrapper>
      <Flex flexDir={"column"} gap={"80px"}>
        <Title>Ofertas Disponibles:</Title>
        <OffersGrid offers={offers} />
      </Flex>
    </PageWrapper>
  )
}

export default OffersPage

