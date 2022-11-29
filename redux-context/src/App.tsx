import React, { useContext } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.lazy";
import ProductsPage from "./containers/Products/Products";
import FavoritesPage from "./containers/Favorites/Favorites";
import { ProductsContext } from "./context/products-context";

export type Product = {
    title: string;
    id: string;
    description: string;
    isFavorite: boolean;
};

function App() {
    return (
        <>
            <Navigation />
            <main>
                <Route path="/" component={ProductsPage} exact />
                <Route path="/favorites" component={FavoritesPage} />
            </main>
        </>
    );
}

export default App;
