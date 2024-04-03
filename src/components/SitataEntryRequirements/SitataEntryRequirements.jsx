import React, { useContext, useEffect, useState } from "react";
import sitataService from "../../services/sitata.service";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Text } from "@chakra-ui/react";
import Title from "../Title/Title";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading/Loading";

const VALUE = ["No",
    "Sí",
    "Si con excepciones",
    "No con excepciones"
    ]  

const TYPE = ["¿Puede un residente ingresar al país?",
                "¿Puede un extranjero ingresar al país?",
                "¿Se permite el tránsito por el país?",
                "¿Se requiere una prueba a la llegada (brote de enfermedad)?",
                "¿Se permite un certificado de prueba (brote de enfermedad)?",
                "¿Se requiere cuarentena a la llegada (brote de enfermedad)?",
                "¿Se requiere una vacuna?",
                "¿Se requiere seguro?",
                "¿Se requiere certificado de prueba?",
                "¿Se requiere formulario de inscripción? (salud u otro)",
                "Detalles de la vacuna"
            ]  

const SitataEntryRequirements = () => {
    const [entryRequirementData, setEntryRequirementData] = useState([])
    const { originCountry, destinationCountry } = useContext(AuthContext) 
    const [isLoadingData, setIsLoadingData] = useState (true)

    const getEntryRequirements = async () => {
        if (!originCountry || !destinationCountry) 
        {
            console.log("NO HAY PAISES", originCountry, destinationCountry)
            return
        }            
        try {
            const requirementData = await sitataService.getRequirements(originCountry,destinationCountry)
            console.log("Cargando datos SITATA:", requirementData)
            if (requirementData) { await setEntryRequirementData(requirementData)}
            console.log("Cargando datos SITATA2:", entryRequirementData)
        } catch (error) {
            console.error("Error Cargando datos SITATA:", error)
        } finally {
            setIsLoadingData(false)
        }
    }

    useEffect(()=>{getEntryRequirements()}, [originCountry,destinationCountry])

    if (isLoadingData) return <Loading/>            

    return (
        <Flex width={"100%"} flexDir={"column"}>                            

            <Text fontSize={["xl","2xl","3xl","3xl"]} >Requisitos de entrada para tu país destino:</Text>            
            {entryRequirementData.map(({id, type, value, comment, reference, updated_at, effective_as_of})=>{
                const typeDescription = TYPE[type]
                const valueDescription = VALUE[value]
                //console.log("DATOS PANEL:", typeDescription, type, value,  comment, valueDescription, reference)
                return (
                    <Accordion allowMultiple>
                        <AccordionItem key={id}>
                            <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight={"bold"} fontSize={["lg","xl","2xl","2xl"]} >
                                    {typeDescription}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>                                
                                <Text fontSize={["lg","xl","2xl","2xl"]}> {valueDescription} </Text> 
                                <Text fontSize={["lg","xl","2xl","2xl"]}> {comment} </Text>
                                <Text fontSize={["lg","xl","2xl","2xl"]}> {reference} </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                )
            })}            
            
            <Text marginTop={"30px"} textAlign={"left"}>Information source SITATA</Text>            
        </Flex>
    )
}
export default SitataEntryRequirements