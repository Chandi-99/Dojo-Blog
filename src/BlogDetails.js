import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data, error, isPending} = useFetch("http://localhost:8000/blogs/" + id);
    const navigate = useNavigate();
    const handeleDelete = () =>{
        fetch("http://localhost:8000/blogs/" + data.id,{
            method: "DELETE"}).then(()=>{
                navigate('/');
            })

    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>Error Fetching Data</div>}
            {data && <article>
                <h1>{ data.title }</h1><br/>
                <p>Written by {data.author}</p>
                <div class="blog-details">{data.body}</div>
                <button onClick={handeleDelete}>delete</button>
                </article>}
        </div>
     );
}
 
export default BlogDetails;