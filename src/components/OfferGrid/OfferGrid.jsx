import { Grid } from "@chakra-ui/react"
import React from "react"
import CustomLink from "../CustomLink/CustomLink"
import OfferCard from "../OfferCard/OfferCard"

const OfferGrid  = ({offers}) =>{
    const handleLike = (e) => {e.preventDefault()}

    return(
        <Grid
        templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={"40px"}
        >
            {offers.map(({country, image, price, _id}) => {
                return (
                    <CustomLink key={_id} to={`/offers/${_id}`}>
                        <OfferCard
                            key={_id}
                            countryName={country.name}
                            image={image}
                            price={price}
                            handleLike={handleLike}
                        >
                        </OfferCard>
                    </CustomLink>    
                )
            })}
        </Grid>
    )
}
export default OfferGrid