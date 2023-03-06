import UsersList from "../components/UsersList"
import BasePage from "./BasePage"

export default function UserPage()
{
    return (
        <BasePage>
            <h1 className="title">Users</h1>
            <article>
                <UsersList />
            </article>
        </BasePage>
    )
}
