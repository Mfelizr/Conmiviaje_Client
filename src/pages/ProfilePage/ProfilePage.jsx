import React, { useContext, useEffect, useState } from "react";
import PageWraper from "../../components/PageWrapper/PageWrapper";
import { Flex } from "@chakra-ui/react";
import Title from "../../components/Title/Title";
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import FavoriteOffers from "../../components/FavoritOffers/FavoritOffers";
import offersServices from "../../services/offers.services";
import { AuthContext } from "../../contexts/AuthContext";

const ProfilePage = () => {
    const {user} = useContext(AuthContext)
    
    const { username, email, avatar, favoriteOffers } = user    

    //Busca las ofertas
/*     const getThreeOffers = async () => {        
        try {
            const resOffers = await offersServices.getAllOffers()
            
            if (resOffers) favoriteOffers2 = resOffers.slice(0,3)            
            console.log("Imported Data:", favoriteOffers2 )
        } catch (error) {
            console.error("Error:", error)            
        }
    }    
    //useEffect(()=>{getThreeOffers()},[])  */

    const handleUserEdit = () => {}
    const handleUserDeletion = () => {}

    return (
        <PageWraper>
            <Flex flexDir={"column"} gap={"44px"}>
                <Title>Hola {username}</Title>
                <ProfileBanner username={username} email={email} avatar={avatar} handleUserDeletion={handleUserDeletion} handleUserEdit={handleUserEdit}/>
                {/* <FavoriteOffers favoriteOffers={favoriteOffers}/> */}
            </Flex>            
        </PageWraper>        
    )
}

export default ProfilePage