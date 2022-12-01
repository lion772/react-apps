import { render, screen } from "@testing-library/react";
import React from "react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
    test("Renders Hello World as a text", () => {
        //Arrange
        render(<Greeting />);
        //Act
        // ... nothing
        //Assert
        const linkElement = screen.getByText(/hello world/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Check whether text remains immutable prior to a button click", () => {
        //Arrange
        render(<Greeting />);

        //Assert
        const pElement = screen.getByText(/it's good to see you/i);
        expect(pElement).toBeInTheDocument();
    });

    test("Check whether text has changed upon a button click", () => {
        //Arrange
        render(<Greeting />);

        //Action
        const btnElement = screen.getByRole("button");
        userEvent.click(btnElement);

        //Assert
        const pElement = screen.getByText(/changed/i);
        expect(pElement).toBeInTheDocument();
    });

    test("Check whether conditional text has disappeared upon a button click", () => {
        //Arrange
        render(<Greeting />);

        //Action
        const btnElement = screen.getByRole("button");
        userEvent.click(btnElement);

        //Assert
        const pElement = screen.queryByText(/it's good to see you/i);
        expect(pElement).toBeNull();
        //expect(pElement).not.toBeInTheDocument();
    });
});

/* 
1-Arrange - set up the test data, test conditions and test enviroment
2-Act - run logic that should be tested (e.g. execute function)
3-Assert - compare execution results with expected results
*/
