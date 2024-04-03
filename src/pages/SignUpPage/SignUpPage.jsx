import React from "react";
import FormPageLayaut from "../../components/FormPageLayaut/FormPageLayaut";
import CustomForm from "../../components/CustomForm/CustomForm";
import { useContext, useState } from "react"
import { Text, useToast } from "@chakra-ui/react";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const IMAGE = "https://conmiviaje.com/wp-content/uploads/2021/10/maximilien-t-scharner-318691-unsplash-576x1024.jpg"

const OPTIONS = [
    {option: "username", type:"text", placeholder: "Usuario"}, 
    {option: "email", type:"email", placeholder: "Correo"}, 
    {option: "password", type:"password", placeholder: "Contraseña"}, 
]

const INIT_DATA = {
    username:"",
    email:"",
    password:""    
}

const SignUpPage = () => {
    const [signupData, setSignupData] = useState(INIT_DATA)
    const [errMsg, setErrMsg] = useState("")
    const toast = useToast()    
    const navigate = useNavigate()

    //Evalua el cambio de valor del input
    const onChange = (e) => {
        const {name, value} = e.target
        setSignupData({...signupData, [name]:value})
    }

    //Envia la informacion
    const onSubmit = async (e) => {        
        try {
            e.preventDefault()    
            
            const res = await authService.signup(signupData)
            setSignupData(INIT_DATA)  
            setErrMsg("")                        
            toast({
                title: "Cuenta creada",
                description: "Tu nueva cuenta ha sido creada correctamente. Ya puedes acceder.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            navigate ("/login")            
        } catch (error) {
            console.error("Error",error)
            setErrMsg(error.response.data.message)             
        }        
    }
    return (
        <FormPageLayaut backgroundImage={IMAGE}>
            <CustomForm
                options={OPTIONS}
                initData={signupData}
                onSubmit ={onSubmit}
                onChange ={onChange}
                title={"Registrarse"}
                subtitle={"Nuevo Usuario"}
            >
            </CustomForm>
            <Text padding={"20px"} color={"red"} fontSize={"lg"} fontWeight={"bold"}>
                {errMsg}
            </Text>
        </FormPageLayaut>
    )
}

export default SignUpPage