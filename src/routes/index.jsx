// import * as jwt_decode from 'jwt-decode';
import { Route,  Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { Dashboard } from "../pages/Dashboard"
import { ErrorPage } from "../pages/ErrorPage"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"
import { CreateContactPage } from "../pages/CreateContactPage"
import { EditContactPage } from "../pages/EditContact"
export const RoutesMain = () => {
    
    return(
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
                <Route path="/Dashboard" element={<Dashboard  />} />
                <Route path="/contact" element={<CreateContactPage />} />
                <Route path="/edit" element={<EditContactPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}