import { useState } from "react"
import {useQuery, useMutation, useQueryClient } from "react-query"
import { addUser, getUsers } from "../api/axiosApi"


export default function UsersList()
{
    const [name, setName] = useState("")

    const clientQuery = useQueryClient()
    const { isLoading, isError, error, data: users } = useQuery("users", getUsers, {
        select: data => data.sort((a, b) => b.id - a.id)
    })

    const addUserMutation = useMutation(addUser, {
        onSuccess: () => {
            clientQuery.invalidateQueries("users")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name)
        {
            addUserMutation.mutate({name: name})
            setName("")
        }
    }

    if (isLoading)
    {
        return <h1>Loading...</h1>
    }
    else if (isError)
    {
        return <span>{error.message}</span>
    }
    else
    {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" value={name} onChange={(e) => setName(e.target.value)} />
                    <button type="submit">+ Add User!</button>
                </form>
                <div>
                    {users?.map((user, i) => {
                        return <h3 key={i}>{user?.id} - {user.name} ({user?.email?.toLowerCase()})</h3>
                    })}
                </div>
            </>
        )
    }
}
