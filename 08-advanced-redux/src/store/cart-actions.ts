import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch: any) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Loading...",
                message: "Loading cart data!",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/products-advanced-redux.json"
            );

            if (!response.ok) {
                throw new Error("Loading cart data failed.");
            }

            const cartList = await response.json();
            dispatch(cartActions.replaceCart(cartList));

            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Loaded cart data successfully!",
                })
            );
        };

        try {
            await sendRequest();
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: (error as Error).message,
                })
            );
        }
    };
};

//Action creator thunk
export const sendCartData = (cart: any) => {
    return async (dispatch: any) => {
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data!",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/products-advanced-redux.json",
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

        try {
            await sendRequest();
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        }
    };
};
