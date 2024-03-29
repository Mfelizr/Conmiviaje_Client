import { Box, Flex } from "@chakra-ui/react"

const FormPageLayaut = ({backgroundImage, children, canBeLiked}) => {
    return(
        <Flex minH={"1200px"}>
            <Box
                w={"50%"}
                backgroundImage={backgroundImage}
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                position={"relative"}
            >
                {/* {canBeLiked && <LikeIcon />} */}
            </Box>
            <Flex alignItems={"center"} justify={"center"} w={"50%"}>
                {children}
            </Flex>
        </Flex>
    )
}

export default FormPageLayaut