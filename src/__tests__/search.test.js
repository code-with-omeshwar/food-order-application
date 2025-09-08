const { render, screen } = require("@testing-library/react")
import { act } from "react"
import Body from "../components/Body"
import MOCK_DATA from "../mock/resListData.json"
import { BrowserRouter } from "react-router"
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render body component with search", async () => {
    await act(async () => render(
        <BrowserRouter><Body /></BrowserRouter>
    ));

    const serachButton = screen.getByRole("button", { name: "Search" })
    expect(serachButton).toBeInTheDocument();

})