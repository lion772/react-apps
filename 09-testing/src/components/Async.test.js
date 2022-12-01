import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("Async Component", () => {
    test("renders posts of request succeeds", async () => {
        //Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: "p1", title: "First post" }],
        });
        render(<Async />);

        //Assert
        const liElements = await screen.findAllByRole("listitem");
        expect(liElements).not.toHaveLength(0);
    });
});
