import { Flex, Text } from "@chakra-ui/react"
import { COLORS } from "../../theme"
import InstagramIcon from "../InstagramIcon/InstagramIcon"
import CustomLink from "../CustomLink/CustomLink"
import FacebookIcon from "../FacebookIcon/FacebookIcon"

const Footer = () => {
    const ICONS = [
        {components: <InstagramIcon/>  , link: "https://www.instagram.com/conmiviaje/", id: 1},
        {components: <FacebookIcon/>  , link: "https://www.facebook.com/conmiviaje/", id: 2}
    ]    
    const datosEmpresa = "© 2024 Conmiviaje.com, C/ San Valeriano 26, 28039, Madrid-España, CIF B88569272 - Teléfonos 912 93 16 89 y 633 54 27 42"
    return(
        <Flex
            width={"100%"}
            position={"absolute"} //"absolute"
            bottom={"0"}
            padding={"20px 80px"}
            backgroundColor={COLORS.SECONDARY}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <CustomLink to={"/faq"}>FAQ</CustomLink>
            <Text>{datosEmpresa}</Text>
            <Flex gap={"20px"}>
                { 
                    ICONS.map(({components, link, id}) => {     
                        return(
                            <CustomLink to={link} cursor = {"pointer"} key={id}>{components}</CustomLink>
                        )
                    })
                }
            </Flex>
       
        </Flex>
    )
}

export default Footer