import Header from "../components/Header";
import { BrowserRouter } from "react-router";
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

it("Should render header component with Login Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
});

it("Should Render Header Component with Cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart - (0)")
    expect(cartItems).toBeInTheDocument();
})

it("Should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logOut = screen.getByRole("button", { name: "Logout" });
    expect(logOut).toBeInTheDocument();
})