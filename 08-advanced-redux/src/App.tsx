import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";

function App() {
  
    return (
        <>
            <Layout>
                <Cart />
                <Products />
            </Layout>
        </>
    );
}

export default App;
