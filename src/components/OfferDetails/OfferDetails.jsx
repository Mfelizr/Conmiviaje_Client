import { Box, Flex, Text } from "@chakra-ui/react"
import React, { useContext } from "react"
import PenEditIcon from "../PenEditIcon/PenEditIcon"

import { format } from "date-fns";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import { AuthContext } from "../../contexts/AuthContext";

const OfferDetails = ({ onOpen, offerDetails, onOpenAlertDelete }) => {
    const { user } = useContext (AuthContext)

    return (
    
    <Flex marginBottom={"80px"} w={"50%"} justify={"center"}>    
        <Flex
        position={"relative"}
        gap={"20px"}
        minW={"550px"}
        maxHeight={"1000px"}
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
                    <Text fontSize={["lg", "xl", "2xl"]}>
                        <Text as={"span"} fontWeight={"bold"}>
                            {name}{": "}
                        </Text>
                            {content}                        
                        </Text>              
                </Box>
            )
        })}


         {user && user.role=="admin"?
            (
            <Flex position={"absolute"}
                gap={"20px"}                 
                top={"25px"} 
                right={"25px"}>
                
                <Box cursor={"pointer"} onClick={onOpen}>
                    <PenEditIcon/>
                </Box>
                <Box cursor={"pointer"} onClick={onOpenAlertDelete}>
                    <DeleteIcon />
                </Box>
            </Flex> )
            :null
         }
        </Flex>       
        
    </Flex>
    
  )
}

export default OfferDetails