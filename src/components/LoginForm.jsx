import { useEffect, useState } from "react"
import { useAuth } from "../hooks"

export default function LoginForm()
{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthenticated } = useAuth()


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Email:", email, "| password:", password)
        setAuthenticated(true)
    }

    return <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleSubmit}>Sign In</button>
    </div>
}
