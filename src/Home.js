import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    // let name = "mario";
    // const [name, setName] = useState("mario"); 
    // const [age, setAge] = useState(30);
    // const handleClick = () => {
    //     // name = "luigi";
    //     // console.log(name);
    //     setName("Luigi");
    //     setAge(35);
    //   }

    // const [name, setName] = useState("mario");


    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id != id);
    //     setBlogs(newBlogs);
    // }

    const {data : blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    console.log(isPending);
    return (
        <div className="home">
            {/* <p>{name} {age}</p>
            <button onClick={handleClick}>Click</button> */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />}

            {/* {blogs && <BlogList blogs = {blogs.filter((blog) => blog.author == 'yoshi')} title="yoshi's Blogs" handleDelete={handleDelete}/>} */}
            {/* <button onClick={()=> setName("luigi")}>change name {name}</button> */}
        </div>
    );
}

export default Home;