import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mock/resData.json"
import RestaurantCard from "../components/RestaurantCard"
import "@testing-library/jest-dom";

it("Should render restaurant card", () => {
    render(<RestaurantCard restaurant={MOCK_DATA} />)
    const resName = screen.getByText("Chaayos Chai+Snacks=Relax");
    expect(resName).toBeInTheDocument();
})