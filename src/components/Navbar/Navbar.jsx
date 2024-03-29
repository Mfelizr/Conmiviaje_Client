import { Flex, Image, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import logoCmv from "../../img/conmiviajecom-logo.png";
import CustomLink from "../CustomLink/CustomLink";
import AuthLink from "../AuthLink/AuthLink";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {

    const NAVIGATION_LINK = [
        {link: "/", text: "Inicio"},
        {link: "/offers", text: "Ofertas"},
        {link: "/services", text: "Servicios"},
        {link: "/aboutUs", text: "Sobre Nosotros"},                    
    ]
    const RESTRICTED_LINK = [        
        {link: "/offers/create", text: "Crear"},
    ]

    const { user, logout } = useContext(AuthContext)
    const location = useLocation()    
    
    return(
    <Flex
        padding={"34px 80px"}
        justifyContent={"space-between"}
        alignItems={"center"}
    >
        <Image src={logoCmv}></Image>
        <Flex gap={"34px"}>
            {
                NAVIGATION_LINK.map(({link, text}) => {
                    const isActiveLink = location.pathname === link
                    
                    return(
                        <CustomLink 
                            to={link} 
                            key={text}
                            textDecoration={isActiveLink?"underline":"none"}
                            fontWeight = {isActiveLink?"bold":"normal"}
                        >   
                            <Text fontSize={["14px","24px"]} >{text}</Text>
                        </CustomLink>
                    )
                })
            }            
        </Flex>
        <Flex gap={"34px"}>
            {                
            user && user.role=="admin"?(
                RESTRICTED_LINK.map(({link, text}) => {
                    const isActiveLink = location.pathname === link
                    
                    return(
                        <CustomLink 
                            to={link} 
                            key={text}
                            textDecoration={isActiveLink?"underline":"none"}
                            fontWeight = {isActiveLink?"bold":"normal"}
                        >   
                            <Text fontSize={["14px","24px"]} >{text}</Text>
                        </CustomLink>
                    )
            })):(<></>)  
            }
        </Flex>              
        <Flex gap={"20px"}>            
            {user?(
                <>
                    <AuthLink onClick={logout}>Desconectar</AuthLink>
                    <AuthLink to={"/profile"}>Perfil</AuthLink>                    
                </>
            ) : (
                 <>
                    <AuthLink to={"/login"}>Acceder</AuthLink>
                    <AuthLink to={"/signup"}>Registrarse</AuthLink>
                </>
            )
            } 
        </Flex>
    </Flex>
    )
}
export default Navbar;
