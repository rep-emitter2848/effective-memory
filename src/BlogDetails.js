import { useParams } from "react-router-dom"
import useFetch from "./useFetch"
import { useHistory } from 'react-router-dom';

const BlogDetails = ()  => {
    const { id } = useParams()
    const {data, error, isPending} = useFetch('http://localhost:8000/blogs?abno=' + id)
    const history = useHistory()

    // console.log(data[0].id)

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data[0].id, {
            method: 'DELETE'
        }).then(() => {
            history.push("/")
        })
    }

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <article>
                <h2>{data[0].title}</h2>
                <p>{id}</p>
                <div>{data[0].body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>}
        </div>
    )
}

export default BlogDetails