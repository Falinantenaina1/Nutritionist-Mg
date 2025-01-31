import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"
import { GlobalStyles } from "../Utils/GlobalStyle"

export const PageProvider = () => {

    return <>
        <GlobalStyles />
        <Navigation />
        <Outlet />
    </>
}