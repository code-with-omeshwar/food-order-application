import Header from "../components/Header";
import { BrowserRouter } from "react-router";
import { render, screen } from "@testing-library/react"
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
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});
