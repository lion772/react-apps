import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products/Products";
import Notification from "./components/UI/Notification/Notification";
import { sendCartData } from "./store/cart-slice";

let loadNumber = 1;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state: any) => state.ui.cartIsVisible);
    const cart = useSelector((state: any) => state.cart);
    const notification = useSelector((state: any) => state.ui.notification);

    useEffect(() => {
        if (loadNumber <= 2) {
            loadNumber++;
            return;
        }
        //Action Creator Thunk
        dispatch(sendCartData(cart) as any);
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
