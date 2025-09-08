import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"


describe("Contact Us Component Test Cases", () => {
    test("Load Contact Us Component: ", () => {
        render(<Contact />)
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })

    test("Load button in Contact Component", () => {
        render(<Contact />)
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument()
    })

    test("Expect placeholder name in the document", () => {
        render(<Contact />)
        const placeholderName = screen.getByPlaceholderText("Name")
        expect(placeholderName).toBeInTheDocument()
    })

    test("Load two input boxes on Contact Component", () => {
        render(<Contact />)
        const inputBoxes = screen.getAllByRole("textbox") // return React component which is an Object
        // console.log(inputBoxes);
        expect(inputBoxes.length).toBe(2);
    })
})