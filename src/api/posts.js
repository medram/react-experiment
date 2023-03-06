import axiosApi from "./axiosApi"

export async function getPosts()
{
    const req = await axiosApi.get("/posts")
    return req.data
}

export async function postDetails(id)
{
    const req = await axiosApi.get(`/posts/${id}`)
    return req.data
}
