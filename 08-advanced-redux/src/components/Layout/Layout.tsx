import React, { FC, Fragment, ReactNode } from "react";
import MainHeader from "./MainHeader/MainHeader";

interface LayoutProps {
    children?: ReactNode | undefined;
}

const Layout: FC<LayoutProps> = (props) => {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
