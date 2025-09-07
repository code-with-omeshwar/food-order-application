import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet } from "react-router";
import Menu from "./components/Menu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
    //some code to fetch values to be used for global context
    const [name, setName] = useState(null);
    useEffect(() => {
        setName("Omeshwar")
    }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ userName: name, setName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <Menu />
            }, {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);