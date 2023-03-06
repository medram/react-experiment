import { useEffect } from "react"
import { useTheme } from "../hooks"

export default function ToggleThemeButton({ children })
{
    const [theme, toggleTheme] = useTheme()

    return <button onClick={() => toggleTheme()}>{children}</button>
}
