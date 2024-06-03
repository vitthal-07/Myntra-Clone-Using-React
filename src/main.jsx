import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Wishlist } from "./Components/Wishlist.jsx";
import Profile from "./Components/Profile.jsx";
import Bag from "./Components/Bag/Bag.jsx";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import { Home } from "./Components/Home/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/bag", element: <Bag /> },
            { path: "/wishlist", element: <Wishlist /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
