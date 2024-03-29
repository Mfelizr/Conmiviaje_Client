import React from "react";
import PageWraper from "../../components/PageWrapper/PageWrapper";
import { Flex } from "@chakra-ui/react";
import FeaturedOffers from "../../components/FeaturedOffers/FeaturedOffers";

function HomePage() {
    return(
        <PageWraper>
            <Flex>
                <FeaturedOffers/>
            </Flex>
        </PageWraper>
    )
}
export default HomePage
