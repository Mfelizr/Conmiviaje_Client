import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import offersServices from "../../services/offers.services";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import FormPageLayaut from "../../components/FormPageLayaut/FormPageLayaut";
import OfferDetails from "../../components/OfferDetails/OfferDetails";
import CustomForm from "../../components/CustomForm/CustomForm";
import Modal from "../../components/Modal/Modal";

//const OPTIONS = ["image", "description", "price", "date_start", "date_end", "conditions"]
const OPTIONS = [    
    {option: "image", type:"url"}, 
    {option: "description", type:"text"}, 
    {option: "price", type:"number"}, 
    {option: "date_start", type:"date"}, 
    {option: "date_end", type:"date"}, 
    {option: "conditions", type:"text"}, 
]
const OFFER_INI_DATA = {
    country:"",
    image:"",
    description:"",
    price:"",
    date_start:"",
    date_end:"",
    conditions:""
}
let countryName =""

const OfferDetailsPage = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [showModal, setShowModal] = useState(false)
    const [offerData, setOfferData] = useState(OFFER_INI_DATA)

    const [editOfferData, setEditOfferData] = useState(offerData)
    
    const { id } = useParams()

    const {image, country, description, price, date_start, date_end, conditions} = offerData
    //if (!countryName) {countryName = country.name}
   
    const OFFER_DETAILS = [
        {name: "País", content: country.name},        
        {name: "Descripción", content: description},        
        {name: "Precio", content: price},        
        {name: "Fecha Inicial", content: date_start},        
        {name: "Fecha Final", content: date_end},        
        {name: "Condiciones", content: conditions},
    ]
    console.log("Offer Details: ", OFFER_DETAILS)

    const getSingleOffer = async() => {
        try {
            const singleOffer = await offersServices.getOneOffers(id)
            //console.log("La oferta:", singleOffer)
            if (singleOffer) setOfferData(singleOffer)
        } catch (error) {
            console.error(error)
        }
    }
    //Para carga de datos iniciales
    useEffect(()=>{getSingleOffer()}, [])

    //Evalua el cambio de valor del input
    const onChange = (e) => {
        const {name, value} = e.target
        //console.log("El name y el Value:", name, value)
        setEditOfferData({...editOfferData, [name]:value})
    }
    
    //Envia la informacion
    const onSubmit = async (e) => {        
        try {
            e.preventDefault()    
            console.log("Datos a Submit Edit:", editOfferData)
            const updatedOffer = await offersServices.updateOffer(id, editOfferData) 
            setShowModal(false)
            //console.log("Datos Guardados:", updatedOffer)                        
            if (updatedOffer) setOfferData(updatedOffer)
        } catch (error) {
            console.error(error)
        }        
    }
    //useEffect(()=>{}, [editOfferData])
    
    return (
        <FormPageLayaut backgroundImage={image}>
            <OfferDetails 
                onOpen={()=> setShowModal(true)}
                offerDetails={OFFER_DETAILS}
            />
            {showModal && (
                <Modal isOpen={showModal} onClose={()=>setShowModal(false)}>
                    <CustomForm
                        options={OPTIONS}
                        initData={editOfferData} //editOfferData para que llegue en blanco
                        onSubmit ={onSubmit}
                        onChange ={onChange}
                        title={"Editar Oferta"}
                        subtitle={""}
                    >
                    </CustomForm>
                </Modal>
                )
            }

        </FormPageLayaut>
    )
}

export default OfferDetailsPage