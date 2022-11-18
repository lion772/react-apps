import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products/Products";
import { useSelector } from "react-redux";

function App() {
    const isHidden = useSelector((state: any) => state.ui.cartIsVisible);

    return (
        <>
            <Layout>
                {!isHidden && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
