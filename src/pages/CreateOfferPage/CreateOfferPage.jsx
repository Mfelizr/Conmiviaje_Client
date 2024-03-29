import React, { useState } from "react"
import FormPageLayaut from "../../components/FormPageLayaut/FormPageLayaut"
import CustomForm from "../../components/CustomForm/CustomForm"
import offersServices from "../../services/offers.services"
import { Flex, Text } from "@chakra-ui/react"

const OFFER_INI_DATA = {
    country:"",
    image:"",
    description:"",
    price:"",
    date_start:"",
    date_end:"",
    conditions:""
}
const IMAGE = "https://conmiviaje.com/wp-content/uploads/2021/10/maximilien-t-scharner-318691-unsplash-576x1024.jpg"

const OPTIONS = ["country", "image", "description", "price", "date_start", "date_end", "conditions"]

function CreateOffersPage() {    
    const [offerData, setOfferData] = useState(OFFER_INI_DATA)
    const [errMsg, setErrMsg] = useState("")

    //Evalua el cambio de valor del input
    const onChange = (e) => {
        const {name, value} = e.target
        setOfferData({...offerData, [name]:value})
    }
    
    //Envia la informacion
    const onSubmit = async (e) => {
        
        try {
            e.preventDefault()    
            console.log("Datos a Submit:",offerData)
            await offersServices.newOffer(offerData) 
            setOfferData(OFFER_INI_DATA)
            setErrMsg("Datos registrados correctamente.")             
        } catch (error) {
            console.error("ERROR:", error)
            setErrMsg(error.response.data.message)             
        }        
    }

  return (
    <FormPageLayaut backgroundImage={IMAGE}>
        <Flex flexDir={"column"}>
            <CustomForm
                options={OPTIONS}
                initData={offerData}
                onSubmit ={onSubmit}
                onChange ={onChange}
                title={"Crear"}
                subtitle={"Registra Nueva Oferta"}
            >
            </CustomForm>
            <Text color={"red"} fontSize={"large"} fontWeight={"bold"}>
                {errMsg}
            </Text>
        </Flex>
        

    </FormPageLayaut>
    
  )
}

export default CreateOffersPage