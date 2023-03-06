import LoginForm from "../components/LoginForm"
import BasePage from "./BasePage"

export default function LoginPage()
{
    return <BasePage>
        <h1 className="title">Login Page</h1>
        <article>
            <LoginForm />
        </article>
    </BasePage>
}
