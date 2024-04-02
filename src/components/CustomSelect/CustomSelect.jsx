import { useContext, useState } from "react";
import Select from "react-select";
import { AuthContext } from "../../contexts/AuthContext";

const stylesSelect={
    control:(styles, state) => {
        return {...styles, 
            minH:"70px",
            fontWeight: "bold",
            fontSize: "24px",                
            borderRadius: "20px",
            backgroundColor: "#D9D9D9",
            boxShadow: state.isFocused ? "black" : "none",
        }
  },
  option: (styles) => {
    return {
        ...styles,
        fontWeight: "bold",
        fontSize: "24px",     
        backgroundColor: "#D9D9D9",
        color: "black",
    }
  }
}

const CustomSelect = ({data, name, ...props}) => {
    const { setOrigin, setDestination } = useContext(AuthContext) 
    console.log ("PRPS SELECT: ", {...props})
    const [optionSelected, setOptionSelected] = useState(null)    
    console.log ("LISTA PAISES Select: ", data)    
    
    const setCountries = async (value) => {                
        if(!value) return
        try {      
            if (name==="originCountry")       
                await setOrigin(value.iso)
            else {
                if (name==="destinationCountry")        
                    await setDestination(value.iso)
            }
        } catch (error) {
            console.error("Error SETCOUNTRY SELECTED: ", error)            
        }        
    }

    return (   
        <Select            
            isSearchable                                    
            defaultValue={data[0].value}
            value={optionSelected}
            options={data}
            styles={stylesSelect}     
            onChange={(value) => {
                    setOptionSelected(value)
                    console.log("VALUE SELECT:", value)                
                    //console.log("Nuevos Datos: ", offerData)
                    setCountries(value)
            } }
            {...props}
        /> 
    )

}

export default CustomSelect