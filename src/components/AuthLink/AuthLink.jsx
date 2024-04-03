import { Flex, Text } from "@chakra-ui/layout"
import CustomLink from "../CustomLink/CustomLink"
import { COLORS } from "../../theme"

const AuthLink = ({ onClick, children, to }) => {
  return (
    <CustomLink
      onClick={onClick}
      borderRadius="30px"
      padding={"10px 20px"}
      backgroundColor={COLORS.PRIMARY}
      color={"white"}
      to={to}
    >
      <Flex justify={"center"} alignItems={"center"}>
        <Text as={"span"} fontSize={["lg","xl","2xl","2xl"]}>
          {children}
        </Text>
      </Flex>
    </CustomLink>
  )
}

export default AuthLink