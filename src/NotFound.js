import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry! Page Not found</h2>
            <Link to="/"> Back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;