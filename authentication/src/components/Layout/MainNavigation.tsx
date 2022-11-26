import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    const { isLoggedIn, onLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    const constLogoutHandler = () => {
        onLogout();
        navigate("/auth");
    };

    return (
        <header className={classes.header}>
            <Link to="/">
                <div className={classes.logo}>React Auth</div>
            </Link>
            <nav>
                <ul>
                    <li>{isLoggedIn && <Link to="/profile">Profile</Link>}</li>
                    <li>
                        <button onClick={constLogoutHandler}>
                            {isLoggedIn ? "Logout" : "Login"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
