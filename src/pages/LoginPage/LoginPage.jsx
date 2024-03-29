import React from "react";
import FormPageLayaut from "../../components/FormPageLayaut/FormPageLayaut";
import CustomForm from "../../components/CustomForm/CustomForm";
import { useContext, useState } from "react"
import authService from "../../services/auth.service";
import { AuthContext } from "../../contexts/AuthContext";

const IMAGE = "https://conmiviaje.com/wp-content/uploads/2021/10/maximilien-t-scharner-318691-unsplash-576x1024.jpg"
const OPTIONS = ["email",  "password"]
const INIT_DATA = {
    email:"",
    password:""    
}

const LoginPage = () => {
    const [loginData, setLoginData] = useState(INIT_DATA)
    const [errMsg, setErrMsg] = useState("")
    const { login } = useContext (AuthContext)

    //Evalua el cambio de valor del input
    const onChange = (e) => {
        const {name, value} = e.target
        setLoginData({...loginData, [name]:value})
    }
    
    //Envia la informacion
    const onSubmit = async (e) => {        
        e.preventDefault()                
        try {            
            await login(loginData)
            setLoginData(INIT_DATA)
            setErrMsg("")
        } catch (error) {
            console.error(error)
            setErrMsg(error.response.data.message)
        }        
    }

    return (        
        <FormPageLayaut backgroundImage={IMAGE}>
            <CustomForm
                options={OPTIONS}
                initData={loginData}
                onSubmit ={onSubmit}
                onChange ={onChange}
                title={"Acceder"}
                subtitle={"Accede a tu area personal"}
            >
            </CustomForm>
        </FormPageLayaut>    
    )
}

export default LoginPage