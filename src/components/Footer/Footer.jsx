import { Flex, Text } from "@chakra-ui/react"
import { COLORS } from "../../theme"
import InstagramIcon from "../InstagramIcon/InstagramIcon"
import CustomLink from "../CustomLink/CustomLink"

const Footer = () => {
    const ICONS = [
        {components: <InstagramIcon/>  , link: "#", id: 1},
        {components: <InstagramIcon/>  , link: "#", id: 2}
    ]    
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