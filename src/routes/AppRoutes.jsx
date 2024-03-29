import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layauts/Layauts"
import HomePage from "../pages/HomePage/HomePages"
import OffersPage from "../pages/OffersPage/OffersPage"
import LoaderOffersPage from "../pages/OffersPage/LoaderOffersPage"
import CreateOffersPage from "../pages/CreateOfferPage/CreateOfferPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import OfferDetailsPage from "../pages/OfferDetailsPage/OfferDetailsPage"
import NotFoundPage  from "../pages/NotFoundPage/NotFoundPage"
import AuthMiddleware from "../middlewares/AuthMiddleware"

const AppRoutes =() =>{
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <HomePage/>
                },
                {
                    path: "/offers",
                    element: <OffersPage/>,
                    loader: LoaderOffersPage
                },
                {
                    path: "/offers/create",
                    element: (
                        <AuthMiddleware>
                            <CreateOffersPage/>
                        </AuthMiddleware>
                    )
                },
                {
                    path: "/offers/:id",
                    element: <OfferDetailsPage/>
                },
                {
                    path: "/login",
                    element: <LoginPage/>
                },
                {
                    path: "/signup",
                    element: <SignUpPage/>
                },
                {
                    path: "/profile",
                    element: (
                        <AuthMiddleware>
                            <ProfilePage/>
                        </AuthMiddleware>                    
                    ),
                },
                {
                    path: "*",
                    element: <HomePage/>
                },
            ]
        }
    ])    
    return <RouterProvider router={router}></RouterProvider>
};

export default AppRoutes