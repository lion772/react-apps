import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification/Notification";

let loadNumber = 1;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state: any) => state.ui.cartIsVisible);
    const cart = useSelector((state: any) => state.cart);
    const notification = useSelector((state: any) => state.ui.notification);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                uiActions.showNotification({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending cart data!",
                })
            );
            const response = await fetch(
                "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/products-advanced-redux",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed.");
            }

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        };
        console.log(loadNumber);

        if (loadNumber <= 2) {
            loadNumber++;
            return;
        }

        sendCartData().catch((error) => {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        });
    }, [cart]);

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
