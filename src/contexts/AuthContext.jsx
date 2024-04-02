import React, { createContext, useEffect, useState } from "react";
import authService from "../services/auth.service";
import countryService from "../services/country.service"
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState (null)
    const [isLoading, setIsLoading] = useState(true)
    const [errMsg, setErrMsg] = useState("")
    const [countriesData, setCountriesData] = useState(null)
    const [originCountry, setOriginCountry] = useState(null)
    const [destinationCountry, setDestinationCountry] = useState(null)
    

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
    
    //Para cargar paises desde el inicio y tenerlo disponible
    const getCountriesList = async () => {        
        try {
            const countries = await countryService.getAllCountries()    
            //console.log ("LISTA PAISES: ", countries)        
            if (countries) setCountriesData(countries)
            //console.log ("LISTA PAISES2: ", countriesData)
        } catch (error) {
            console.error("ERROR LISTA PAISES: ",error)
            setErrMsg(error.data.response.message)
        }
    }

    //Para guardar el pais origen y destino seleccionado
    const setOrigin = async (valueISO) => {
        console.log("PAIS ORIGEN 1", valueISO)
        if(valueISO) {await setOriginCountry(valueISO)}
        console.log("PAIS ORIGEN 2", originCountry)
    }
    //Para guardar el pais origen y destino seleccionado
    const setDestination = async (valueISO) => {
        console.log("PAIS DESTINO 1", valueISO)
        if(valueISO) {await setDestinationCountry(valueISO)}
        console.log("PAIS DESTINO 2", destinationCountry)
    }
    
    useEffect(() => {getCountriesList()}, [])
    useEffect(() => {getUser()}, [])   

    return (
        <AuthContext.Provider value={{user, login, logout, isLoading, countriesData, originCountry, destinationCountry, setOrigin, setDestination}}>
            {children}
        </AuthContext.Provider>
    )
}
