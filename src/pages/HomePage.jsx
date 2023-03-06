import { useContext, useEffect } from "react";
import BasePage from "./BasePage";
import StoreContext from "../context/StoreContext"
import { useTheme } from "../hooks";
import ToggleThemeButton from "../components/ToggleThemeButton";


export default function HomePage()
{
    const { isLoggedIn } = useContext(StoreContext)
    const [theme, toggleTheme] = useTheme()

    return <BasePage>
        <h1 className="title">Home Page</h1>
        <ToggleThemeButton>Change theme?</ToggleThemeButton>
        {theme}<br />
        {isLoggedIn && <span>LoggedIn</span>}
    </BasePage>
}
