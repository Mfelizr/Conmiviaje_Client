import { Text } from "@chakra-ui/react"
import React from "react"
import { COLORS } from "../../theme"

const Title = ({ fontSize = "56px", children, ...props }) => {
  return (
    <Text
      textAlign={"center"}
      fontSize={["24px", fontSize]}
      fontWeight={"bold"}
      color={COLORS.TEXTS}
      {...props}
    >
      {children}
    </Text>
  )
}

export default Title