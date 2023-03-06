import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks"
import UnAuthorizedPage from "../UnAuthorizedPage"


export default function AuthRequired()
{
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    // checking authentication
    let content = <Outlet />

    useEffect(() => {
        if (!isAuthenticated)
        {
            console.log("isAuthenticated:", isAuthenticated)
            navigate("/login", { replace: true })
        }
    }, [isAuthenticated])


    return content
}
