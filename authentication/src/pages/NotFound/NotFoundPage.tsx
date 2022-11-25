import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    const error = useRouteError();
    return (
        <div className="centered">
            <h1>Something went wrong:</h1>
            <h2> {(error as Error).message}</h2>
            <Link className="btn" to={"/auth"}>
                Back to Authentication
            </Link>
        </div>
    );
};

export default NotFoundPage;
