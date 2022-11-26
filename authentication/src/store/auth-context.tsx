import React, { FC, PropsWithChildren, useEffect, useState } from "react";

const initialContextValue = {
    isLoggedIn: false,
    token: "",
    onLogin: () => {},
    onLogout: () => {},
    getToken: (token: string) => {},
};

export const AuthContext = React.createContext(initialContextValue);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        if (
            localStorage.getItem("isLoggedIn") &&
            localStorage.getItem("token")
        ) {
            setIsLoggedIn(true);
            setToken(localStorage.getItem("token") as string);
        }
    }, [isLoggedIn]);

    const onLoginHandler = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "loggedIn");
    };

    const onLogoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
    };

    const onTokenHandler = (token: string) => {
        setToken(token);
        localStorage.setItem("token", token);
    };

    const ctxValue = {
        isLoggedIn,
        token,
        onLogin: onLoginHandler,
        onLogout: onLogoutHandler,
        getToken: onTokenHandler,
    };

    return (
        <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
    );
};
