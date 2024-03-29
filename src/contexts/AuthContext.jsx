import React, { createContext, useEffect, useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export const AuthContext = createContext()

const USER_INIT = {
    username: "",
    email: "",
    avatar: "https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png",    
    favoriteOffers: [],
}

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState (null)
    const [isLoading, setIsLoading] = useState(true)
    const [errMsg, setErrMsg] = useState("")

    
    const setToken = (token) => {
        //guardar token en localstorage
        localStorage.setItem("token", token)
    }
    
    const getToken = () => {        
        return localStorage.getItem("token")
    }

    const getUser = async() => {
        try {            
            const token = getToken()
            if (token) {
                const loggedUser = await authService.getUser(token)
                //guardar el usuaro con el estado de user
                setUser(loggedUser)
            }    
        } catch (error) {
            console.error("Error: ", error)
        }
        finally{
            setIsLoading(false)
        }
    }

    const login = async (userData) => {
        //Llamada
        try {
            //token para obtener la info del usuario
            const { token } = await authService.login(userData)    
            //guarda el token
            setToken(token)       
            //recoger al usuario con el token    
            await getUser()         
            //redireccion al perfil
            navigate("/profile")
        } catch (error) {
            console.error(error)
            setErrMsg(error.response.data.message)
            return <Text>errMsg</Text>
        }       
    }    

    const logout = () => {
        //remover el token
        //set user a null
        //regresar al login
        localStorage.removeItem("token")
        setUser(null)
        navigate("/login")
    }

    useEffect(() => {getUser()}, [])

    return (
        <AuthContext.Provider value={{user, login, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}
