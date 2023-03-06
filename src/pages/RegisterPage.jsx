import RegisterForm from "../components/RegisterForm"
import BasePage from "./BasePage"

export default function RegisterPage() {
    return <BasePage>
        <h1 className="title">Register New Account</h1>
        <article>
            <RegisterForm />
        </article>
    </BasePage>
}
