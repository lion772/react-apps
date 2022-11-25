import React, { FC } from "react";
import { Outlet } from "react-router";
import styles from "./Layout.module.css";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => (
    <div className={styles.Layout}>
      
        <Outlet />
    </div>
);

export default Layout;
