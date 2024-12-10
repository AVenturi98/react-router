import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function DefaultLayout() {
    return (
        <>
            <Header className="navLink" />
            <Outlet />
        </>
    )
}