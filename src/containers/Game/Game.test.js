import React from "react";
import { render } from "@testing-library/react";
import Game from "./Game";

describe("Game tests", () => {
    it("should render", () => {
        expect(render(<Game />)).toBeTruthy();
    });
});
