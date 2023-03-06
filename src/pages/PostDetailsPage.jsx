import { useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { postDetails } from "../api/posts";
import BasePage from "./BasePage";


export default function PostDetailsPage()
{
    const navigate = useNavigate()
    const { id } = useParams()
    const { isLoading, isError, error, data: post } = useQuery(`post:${id}`, () => postDetails(id))

    let content = ""

    if (isLoading)
        content = <h2 className="title">Loading...</h2>
    else if (isError)
        content = <h2>{error.message}</h2>
    else
        content = <>
            <h1 className="title">{post?.title?.charAt(0).toUpperCase() + post?.title?.slice(1)} (id: {post?.id})</h1>
            <span onClick={() => navigate(-1)}>Go Back</span>
            <article>{post.body}</article>
        </>

    return (
        <BasePage>
            {content}
        </BasePage>
    )
}
