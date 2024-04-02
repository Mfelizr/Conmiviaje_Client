import React, { useContext, useState } from "react";
import Title from "../Title/Title";
import { AuthContext } from "../../contexts/AuthContext";
import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel } from "@chakra-ui/react";
import SitataEntryRequirements from "../SitataEntryRequirements/SitataEntryRequirements";
import CustomSelect from "../CustomSelect/CustomSelect";
import { COLORS } from "../../theme";

const optionsSelect = [
    { label: 'República Dominicana', value: '65fb7d0fb29b5aff6e2070a8', iso:"DO" },
    { label: 'España', value: '65fb7d5cb29b5aff6e2070a9', iso: "ES" },    
]

const CountrySelector = () => {
    const [show, setShow] = useState (false)
    const { originCountry, destinationCountry } = useContext(AuthContext) 
    
    let isError = false //input === ''

    const showRequirements = () => {        
        if (!originCountry || !destinationCountry) {           
            setShow(false)            
            isError = true
        } else {           
            setShow(true)            
        }
    }

    return (        
        <Flex width={"100%"} gap={"40px"} flexDir={"column"}>
            <Title>Elige tu destino favorito:</Title>
              
            <FormControl width={"50%"} isInvalid={isError} >
                <FormLabel fontSize={["10px","20px"]} >País Origen:</FormLabel>                
                <CustomSelect
                    data= {optionsSelect}            
                    name = "originCountry"
                />
                <FormLabel fontSize={["10px","20px"]}>País Destino:</FormLabel>                        
                <CustomSelect
                            data= {optionsSelect}                    
                            name = "destinationCountry"
                        />            
                {!isError ? (
                    <FormHelperText fontSize={["8px","12px"]}>
                    Elige el país de origen y país destino del viaje
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>Favor indicar paises para la busqueda</FormErrorMessage>
                )}              
                <Button 
                    borderRadius={"30px"}                     
                    padding={["10px", "20px", "30px"]}                    
                    colorScheme="teal" 
                    variant="solid"
                    fontSize={"20px"}
                    color={"white"}
                    onClick={showRequirements} 
                    marginTop={"20px"}
                >Buscar
                </Button>           

            </FormControl>
            <>
            { show ?
                <SitataEntryRequirements/>
                :
                null
            }
            </>            
        </Flex>
    )    
}

export default CountrySelector 