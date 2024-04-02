import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"
import PenEditIcon from "../PenEditIcon/PenEditIcon"
import { format } from "date-fns";

const OfferDetails = ({ onOpen, offerDetails }) => {
  return (
    
    <Flex marginBottom={"80px"} w={"50%"} justify={"center"}>    
        <Flex
        position={"relative"}
        gap={"20px"}
        minW={"550px"}
        maxHeight={"800px"}
        padding={"84px 47px"}
        border={"1px solid rgba(0,0,0,0.2)"}
        borderRadius={"20px"}
        flexDir={"column"}
      >
        {offerDetails.map(({ name, content }) => {
                    //console.log("Resultado: ", ({content} && (name.slice(0,5) == "Fecha")))
                    //console.log("Resultado fecha: ", name.slice(0,5))
            return (
                <Box key={name}>              
                    <Text>
                        <Text as={"span"} fontWeight={"bold"}>
                            {name}{": "}
                        </Text>
                            {content}                        
                        </Text>              
                </Box>
            )
        })}       
            <Flex position={"absolute"} 
                onClick={onOpen} 
                cursor={"pointer"} 
                top={"25px"} 
                right={"25px"}>
                <PenEditIcon/>
            </Flex> 
        </Flex>       
        
    </Flex>
    
  )
}

export default OfferDetails