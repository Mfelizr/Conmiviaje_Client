import { Flex, GridItem, Text } from "@chakra-ui/react"
import React from "react"
import { COLORS } from "../../theme"

const OfferCard = ({countryName, image, price, handlelike}) => {
    return(
        <GridItem
            cursor={"pointer"}
            borderRadius={"30px"}
            border={"solid 1px black"}
            w={"100%"}
            h={["400px","500px","550px",]}
            backgroundImage={image}
            backgroundPosition={"center"}
            backgroundSize={"cover"}                        
            position={"relative"}
        >
            <Flex
                width={"100%"}
                position="absolute"
                bottom="45px"
                justify={"center"}
                alignItems={"center"}
                padding={"22px 56px"}
                backgroundColor={COLORS.SECONDARY}
                borderRadius={"30px"}
                flexDir={"column"}
            >
                <Text fontSize={"20px"} fontWeight={"bold"}>{countryName}</Text>
                <Text fontSize={"20px"} fontWeight={"bold"}>{`Desde: ${price}€`}</Text>
            </Flex>
        </GridItem>
    )
}
export default OfferCard