import React, { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products/Products";
import { useSelector } from "react-redux";
import useHttp from "./hooks/use-http/use-http";

function App() {
    const isHidden = useSelector((state: any) => state.ui.cartIsVisible);
    const cart = useSelector((state:any)=> state.cart);
    const { isLoading, error, sendRequest: putUpdatedProduct } = useHttp();


    useEffect(() => {
         const requestConfig = {
            url: "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/products-advanced-redux.json",
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body:cart,
         };
     putUpdatedProduct(requestConfig, retrieveDataFromBackend )
    }, [cart, putUpdatedProduct])

    function retrieveDataFromBackend(data: any) {
        console.log(data);
    }
    

    return (
        <>
            <Layout>
                {!isHidden && <Cart />}
                <Products />
            </Layout>
            {!isLoading && error && {error}}
        </>
    );
}

export default App;
