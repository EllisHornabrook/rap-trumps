import React from "react";
import { render } from "@testing-library/react";
import OpponentTurn from "./OpponentTurn";

describe("OpponentTurn tests", () => {
    it("should render", () => {
        expect(render(<OpponentTurn />)).toBeTruthy();
    });
});
