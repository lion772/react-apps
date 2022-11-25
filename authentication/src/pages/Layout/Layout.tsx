import { Outlet } from "react-router";
import MainNavigation from "../../components/Layout/MainNavigation";

const Layout = () => {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
};

export default Layout;
