import { Button as ChakraButton } from "@chakra-ui/react"
import { COLORS } from "../../theme"

const SubmitButton = () => {
    return (
        <ChakraButton
            _hover={{
                backgroundColor: COLORS.SUPPORT,
            }}
            minH={"56px"}
            width={"100%"}
            fontSize={["xl","2xl","3xl","3xl"]}
            marginTop={"54px"}
            borderRadius={"20px"}
            backgroundColor={COLORS.PRIMARY}
            fontWeight={"bold"}
            color={"white"}
            type="submit"
        >
            Enviar
        </ChakraButton>
    )
}

export default SubmitButton