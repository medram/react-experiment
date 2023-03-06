import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../hooks";


export default function NavBar()
{
    const { isAuthenticated, setAuthenticated } = useAuth()

    return (
        <nav>
            <ul>
                <li><strong><Link to="/">Brand</Link></strong></li>
            </ul>
            <ul>
                <li><NavLink to="/"  >Home</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/users" >Users</NavLink></li>
                <li><NavLink to="/posts" >Blog</NavLink></li>
                {!isAuthenticated? (
                    <>
                        <li><NavLink to="/login" role="button">Login</NavLink></li>
                        <li><NavLink to="/register" role="button">Register</NavLink></li>
                    </>
                ): (
                    <li><span role="button" onClick={() => setAuthenticated(false)}>Logout</span></li>
                )}

            </ul>
        </nav>
    )
}
