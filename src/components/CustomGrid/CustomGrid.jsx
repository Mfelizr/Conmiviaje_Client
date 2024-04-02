import { Grid } from "@chakra-ui/react"
import React from "react"
import CustomCard from "../CustomCard/CustomCard"

const CustomGrid  = ({data}) =>{
    
    return(
        <Grid
        templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={"20px"}
        >
            {data.map(({title, details, id}) => {
                return (                    
                    <CustomCard
                        key={id}
                        title={title}
                        details={details}                            
                    >
                    </CustomCard>                    
                )
            })}
        </Grid>
    )
}
export default OfferGrid