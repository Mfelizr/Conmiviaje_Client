import React from "react";
import PageWraper from "../../components/PageWrapper/PageWrapper";
import { Flex } from "@chakra-ui/react";
import FeaturedOffers from "../../components/FeaturedOffers/FeaturedOffers";
import CountrySelector from "../../components/CountrySelector/CountrySelector";

function HomePage() {
    return(
        <PageWraper>
            <Flex flexDir={"column"}>            
                <CountrySelector/>            
                <FeaturedOffers/>            
            </Flex>
        </PageWraper>
    )
}
export default HomePage
