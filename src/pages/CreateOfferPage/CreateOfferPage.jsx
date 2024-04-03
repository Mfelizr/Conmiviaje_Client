import React, { useContext, useState } from "react"
import FormPageLayaut from "../../components/FormPageLayaut/FormPageLayaut"
import offersServices from "../../services/offers.services"
import { Flex, Text, useToast } from "@chakra-ui/react"
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import { AuthContext } from "../../contexts/AuthContext"
import { capitalizeText } from "../../utils"
import Select from "react-select"

const IMAGE = "https://conmiviaje.com/wp-content/uploads/2021/10/maximilien-t-scharner-318691-unsplash-576x1024.jpg"

const OFFER_INI_DATA = {
    country:"",
    image:"",
    description:"",
    price:"",
    date_start:"",
    date_end:"",
    conditions:""
}

const OPTIONS = [
    {option: "country", type:"select", placeholder: "País"}, 
    {option: "image", type:"url", placeholder: "URL Imagen"}, 
    {option: "description", type:"text", placeholder: "Descripción"}, 
    {option: "price", type:"number", placeholder: "Precio"}, 
    {option: "date_start", type:"date", placeholder: "Fecha Inicio"}, 
    {option: "date_end", type:"date", placeholder: "Fecha Fin"}, 
    {option: "conditions", type:"text", placeholder: "Condiciones"}, 
]

const optionsSelect = [
    { label: 'República Dominicana', value: '65fb7d0fb29b5aff6e2070a8', iso:"DO" },
    { label: 'España', value: '65fb7d5cb29b5aff6e2070a9', iso: "ES" },    
    { label: 'Canadá', value: '660bf505e4414b86e420e62a', iso: "CA" },   
    { label: 'Estados Unidos', value: '660bf63ce4414b86e420e62f', iso: "US" },   
    { label: 'Colombia', value: '660bf670e4414b86e420e630', iso: "CO" },    
] 

function CreateOffersPage() {    
    const [offerData, setOfferData] = useState(OFFER_INI_DATA)
    const [errMsg, setErrMsg] = useState("")
    const [optionSelected, setOptionSelected] = useState(null)    
    const { countriesData } = useContext(AuthContext)
    const toast = useToast()

    const title = "Crear"
    const subtitle = "Registra Nueva Oferta"    
    
    const stylesSelect={
        control:(styles, state) => {
            return {...styles, 
                minH:"70px",
                fontWeight: "bold",
                fontSize: "20px",                
                borderRadius: "20px",
                //backgroundColor: "#D9D9D9",
                boxShadow: state.isFocused ? "black" : "none",
            }
      },
      option: (styles) => {
        return {
            ...styles,
            fontWeight: "bold",
            fontSize: "20px",     
            //backgroundColor: "#D9D9D9",
            color: "black",
        }
      }
    }    
    //Evalua el cambio de valor del input
    const onChange = (e) => {
        const {name, value} = e.target
        setOfferData({...offerData, [name]:value})
        console.log("Nuevos Datos: ",offerData)
    }    
    //Envia la informacion
    const onSubmit = async (e) => {      
        try {
            e.preventDefault()    
            //console.log("Datos a Submit:",offerData)
            await offersServices.newOffer(offerData) 
            setOfferData(OFFER_INI_DATA)
            setErrMsg("")             
        } catch (error) {
            console.error("ERROR:", error)
            setErrMsg(error.response.data.message)             
        } finally{
            toast({
                title: "Crear Oferta",
                description: errMsg?errMsg:"Tu nueva oferta ha sido creada correctamente.",
                status: errMsg?'error':'success',
                duration: 5000,
                isClosable: true,
            })
        }        
    }    

  return (
    <FormPageLayaut backgroundImage={IMAGE}>
    <Flex flexDir={"column"}>
        <Flex minW={"400px"} maxW={"400px"} flexDir={"column"}>
            <Text textAlign={"center"} fontSize={"48px"} fontWeight={"bold"}>
                {title}
            </Text>
            {subtitle && (
                <Text textAlign={"center"} fontSize={"24px"}>
                {subtitle}
                </Text>
            )}
            <form onSubmit={onSubmit} style={{ marginTop: "30px" }}>
                <Flex flexDir={"column"} gap={"30px"}>
                    {OPTIONS.map(({option, type, placeholder}) => {
                        //console.log("opcion menu:", option)
                        if (option == "country") {
                            //console.log("Llena Select:", option, countriesData)
                            return (
                                <Select
                                    name={option}
                                    isSearchable                                    
                                    defaultValue={optionsSelect[0].value}
                                    value={optionSelected}
                                    options={optionsSelect}
                                    styles={stylesSelect}
                                    placeholder={placeholder}
                                    onChange={(value) => {
                                        setOptionSelected(value)
                                        //console.log("VALUE SELECT:", value.value)
                                        setOfferData({...offerData, [option]:value.value})
                                        //console.log("Nuevos Datos: ", offerData)
                                    }}
                                />                               
                            )
                        } else {
                            return (
                                <Input
                                    type={type}
                                    name={option}
                                    onChange={onChange}
                                    key={option}
                                    placeholder={placeholder} 
                                    value={offerData[option]}                                
                                />
                                )
                            }
                        })}
                </Flex>
                <SubmitButton />
            </form>
        </Flex>
        {/* <Text color={"red"} fontSize={"2xl"} fontWeight={"bold"} mt={"10px"}>
            {errMsg}
        </Text> */}
    </Flex>
    </FormPageLayaut>
  )
}   
export default CreateOffersPage    




