import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";


export default function NotAuthRequired() {
    const { isAuthenticated } = useAuth()

    const navigate = useNavigate()

    let content = <Outlet />

    // checking authentication
    useEffect(() => {
        if (isAuthenticated)
        {
            navigate("/admin", { replace: true })
        }
    }, [isAuthenticated])

    return content
}
