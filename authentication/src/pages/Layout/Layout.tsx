import React, { FC } from "react";
import { Outlet } from "react-router";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Layout;
