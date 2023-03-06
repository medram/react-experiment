import axios from "axios"

const axiosApi = axios.create({
    baseURL: "http://localhost:3500"
    //baseURL: "http://192.168.11.104:3500"
})

export async function getUsers() {
    const res = await axiosApi.get("/users")
    return res.data
}

export async function addUser(user) {
    const res = await axiosApi.post("/users", user)
    return res.data
}

export async function updateUser(user) {
    const res = await axiosApi.patch(`/users/${user.id}`, user)
    return res.data
}

export async function deleteUser(user) {
    const req = await axiosApi.delete(`/users/${user.id}`)
    return req.data
}

export default axiosApi

