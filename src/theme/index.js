import { extendTheme } from "@chakra-ui/react"; 

export const COLORS = {
    PRIMARY: "#418791",
    SECONDARY: "#96C4CA",
    TEXTS: "#2F2F41",
    SUPPORT: "#38536E",
    ALTERNATIVE: "#FAC750",
    YELLOW_ALTERNATIVE: "#FAC750",
    RED_EMPHASIS: "#E9523A"
}

export const theme = extendTheme({
    styles: {
        global: {
            body:{"overscroll-behavior":"none"}
        },
    },
})