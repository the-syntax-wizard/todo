import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="container notFound">
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to="/">To home</Link>
        </div>
    );
};
