import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

//custom management component
export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        localStorage.getItem("isLoggedIn") && setIsLoggedIn(true);
    }, []);

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        setIsLoggedIn(true);
    };

    //setter localstorage
    isLoggedIn && localStorage.setItem("isLoggedIn", "1");

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
