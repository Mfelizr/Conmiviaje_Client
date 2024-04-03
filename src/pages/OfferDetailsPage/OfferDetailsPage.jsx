import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import offersServices from "../../services/offers.services";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import FormPageLayaut from "../../components/FormPageLayaut/FormPageLayaut";
import OfferDetails from "../../components/OfferDetails/OfferDetails";
import CustomForm from "../../components/CustomForm/CustomForm";
import Modal from "../../components/Modal/Modal";
import Loading from "../../components/Loading/Loading";

const OPTIONS = [    
    {option: "image", type:"url",  placeholder: "URL Imagen"}, 
    {option: "description", type:"text",  placeholder: "Descripción"}, 
    {option: "price", type:"number",  placeholder: "Precio"}, 
    {option: "date_start", type:"date",  placeholder: "Fecha Inicio"}, 
    {option: "date_end", type:"date",  placeholder: "Fecha Fin"}, 
    {option: "conditions", type:"text",  placeholder: "Condiciones"}, 
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
    const cancelRef = useRef()
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [offerData, setOfferData] = useState(OFFER_INI_DATA)

    const [editOfferData, setEditOfferData] = useState(offerData)
    const [isLoadingData, setIsLoadingData] = useState(true)
    
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
        } finally {
            setIsLoadingData(false)
        }

    }
    //Para carga de datos iniciales
    useEffect(()=>{getSingleOffer()}, [])

    //Para eliminar oferta
    const onOfferDelete = async (e) => {
        try {
            e.preventDefault()    
            console.log("Datos a Eliminar:", editOfferData)
            //const deletedOffer = true
            const deletedOffer = await offersServices.deleteOffer(id) 
            //volver a la pagina principal o de ofertas
            setShowAlert(false)                        
            if (deletedOffer) navigate("/offers")
        } catch (error) {
            console.error(error)
        }        
    }

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
    
    if (isLoadingData) 
        return <Loading/>

    return (
        <FormPageLayaut backgroundImage={image}>
            <OfferDetails 
                onOpen={()=> setShowModal(true)}
                onOpenAlertDelete={()=>setShowAlert(true)}
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
            
            {showAlert && (
                <AlertDialog
                    isOpen={showAlert}
                    leastDestructiveRef={cancelRef}
                    onClose={()=>setShowAlert(false)}                >
                    <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize={["lg","xl","2xl"]} fontWeight='bold'>
                            Borrar Oferta
                        </AlertDialogHeader>
            
                        <AlertDialogBody>
                            ¿Esta seguro de borrar la oferta? Una vez confirmado no se puede recuperar.
                        </AlertDialogBody>
            
                        <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={()=>setShowAlert(false)}>
                            Cancelar
                        </Button>
                        <Button colorScheme='red' onClick={onOfferDelete} ml={3}>
                            Borrar
                        </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>

                )
            }

        </FormPageLayaut>
    )
}

export default OfferDetailsPage