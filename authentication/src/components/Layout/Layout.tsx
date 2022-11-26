import { FC, Fragment, PropsWithChildren } from "react";
import { Outlet } from "react-router";

import MainNavigation from "./MainNavigation";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Fragment>
            <MainNavigation />
            <Outlet />
        </Fragment>
    );
};

export default Layout;
