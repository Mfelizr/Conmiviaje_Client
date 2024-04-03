import { Flex, GridItem, Text } from "@chakra-ui/react"
import React from "react"
import { COLORS } from "../../theme"

const OfferCard = ({countryName, description, image, price, handlelike}) => {
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
                <Text fontSize={['lg','xl','2xl','2xl']} fontWeight={"bold"}>{description}</Text>
                <Text fontSize={['lg','xl','2xl','2xl']}> {countryName}</Text>
                <Text fontSize={['lg','xl','2xl','2xl']} fontWeight={"bold"} color={COLORS.RED_EMPHASIS} >{`Desde: ${price}€`}</Text>
            </Flex>
        </GridItem>
    )
}
export default OfferCard