import { useQuery, useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { getPosts } from "../api/posts";
import BasePage from "./BasePage";

export default function PostsPage()
{
    const {isLoading, isError, error, data: posts} = useQuery("posts", getPosts, {
        select: data => data.sort((a, b) => b.id - a.id)
    })

    return (
        <BasePage>
            <h1 className="title">Blog / Posts</h1>
            {isError && <h2>{error.message}</h2>}

            {isLoading? <h2>Loading....</h2> : posts?.map((post, i) => {
                return <article key={i}>
                    <Link to={`/posts/${post.id}`}><h2>{post.id}) {post.title}</h2></Link>
                    <i>{new Date().toUTCString()}</i><br />
                    <Link to={`/posts/${post.id}`}>read more</Link>
                </article>
            })}
        </BasePage>
    )
}
