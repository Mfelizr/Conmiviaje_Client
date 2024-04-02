import React from "react";
import { Flex, Text } from "@chakra-ui/react"
import Input from "../Input/Input"
import SubmitButton from "../SubmitButton/SubmitButton"
import { capitalizeText } from "../../utils"


const CustomForm = ({
    title,
    subtitle,
    onChange,
    onSubmit,
    options,
    initData,
    ...props
  }) => {
    return(
        <Flex {...props} minW={"400px"} maxW={"400px"} flexDir={"column"}>
            <Text textAlign={"center"} fontSize={["24px","48px"]} fontWeight={"bold"}>
                {title}
            </Text>
            {subtitle && (
                <Text textAlign={"center"} fontSize={["16px", "24px"]}>
                {subtitle}
                </Text>
            )}
            <form onSubmit={onSubmit} style={{ marginTop: "30px" }}>
                <Flex flexDir={"column"} gap={"30px"}>
                    {options.map(({option, type}) => {
                        return (
                        <Input
                            type= {type} //{option === "password" ? "password" : "text"}
                            name={option}
                            onChange={onChange}
                            key={option}
                            placeholder={capitalizeText(option)} // CAPITALIZED!!! "name" => "Name"
                            value={initData[option]}
                        />
                        )
                    })}
                    </Flex>
                <SubmitButton />
            </form>
        </Flex>
    )
}

export default CustomForm