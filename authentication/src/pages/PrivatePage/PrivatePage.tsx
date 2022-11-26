import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../store/auth-context";

export function PrivateRoute({ children }: { children: React.ReactElement }) {
    // the user verification logic is up to your application
    // this is an example based on your code above
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/profile");
        } else {
            // user not logged in, redirect to the Login page which is unprotected
            navigate("/auth");
        }
    }, [isLoggedIn, navigate]);

    return <>{children}</>;
}
