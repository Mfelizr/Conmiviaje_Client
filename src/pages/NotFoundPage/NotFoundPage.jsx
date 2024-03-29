import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomLink from "../../components/CustomLink/CustomLink";

const NotFoundPage = () => {
    return (
        <Flex height={"calc(100vh - 322px)"}
            flexDir={"column"}
            gap={"12px"}
            padding={"10px"}
            justifyContent={"center"}
            alignItems={"center"}
        >
             <Text fontWeight={"bold"} fontSize={"52px"}>
                404
            </Text>
            <Text fontWeight={"bold"} fontSize={"52px"}>
                Page not found!!!
            </Text>
            <CustomLink to={"/"} textDecoration="underline">   
                <Text>Volver</Text>
            </CustomLink>
        </Flex>
    )
}

export default NotFoundPage