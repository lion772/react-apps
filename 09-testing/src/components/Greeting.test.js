import { render, screen } from "@testing-library/react";
import React from "react";
import { shallow, mount } from "enzyme";
import Greeting from "./Greeting";
import Adapter from "enzyme-adapter-react-15";

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
        let wrapper = mount(<Greeting />);

        //Action
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");

        useStateSpy.mockImplementation((init) => [init, setState]);
        const button = wrapper.find("button");
        button.simulate("click");
        expect(setState).toHaveBeenCalled(1);
    });
});

/* 
1-Arrange - set up the test data, test conditions and test enviroment
2-Act - run logic that should be tested (e.g. execute function)
3-Assert - compare execution results with expected results
*/
