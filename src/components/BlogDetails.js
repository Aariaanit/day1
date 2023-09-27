import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending } = useFetch('http://localhost:4000/blogs/' + id);
    const navigate = useNavigate();

    const click = () => {
        fetch('http://localhost:4000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return ( 
        <div className="blogDetails">
            {isPending && <div>Loading...</div>}
            { error && <div> { error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <h3>{ blog.instructor }</h3>
                    <div>{ blog.body }</div>
                    <button onClick={click}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;