import React from "react";
import { render } from "@testing-library/react";
import Title from "./Title";

describe("Title tests", () => {
    it("should render", () => {
        expect(render(<Title />)).toBeTruthy();
    });
});
