import { Flex } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import OfferGrid from "../OfferGrid/OfferGrid"
import Title from "../Title/Title"
import offerService from "../../services/offers.services"

const FeaturedOffers = () => {
    const [offers, setOffers] = useState([])

    //axios getall offers
    const getNineOffers = async () => {
        console.log("Busca 8 ofertas")
        try {
            const resOffers = await offerService.getActiveOffers()
            //console.log("Imported Data:", resOffers )
            if (resOffers) setOffers(resOffers.slice(0,8) )            
        } catch (error) {
            console.error("Error:", error)            
        }
    }
    useEffect(()=>{getNineOffers()},[])

    return(
        <Flex width={"100%"} gap={"80px"} flexDir={"column"}>            
            <Title>Ofertas Recomendadas</Title>
            <OfferGrid offers={offers}></OfferGrid>

        </Flex>
    )
}
export default FeaturedOffers