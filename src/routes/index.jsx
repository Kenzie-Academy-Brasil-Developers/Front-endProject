import { Route,  Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { RegisterPage } from "../pages/RegisterPage"
import { Dashboard } from "../pages/Dashboard"
import { ErrorPage } from "../pages/ErrorPage"


export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}