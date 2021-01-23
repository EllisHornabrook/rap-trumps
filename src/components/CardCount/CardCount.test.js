import React from "react";
import { render } from "@testing-library/react";
import CardCount from "./CardCount";

describe("CardCount tests", () => {
    it("should render", () => {
        expect(render(<CardCount />)).toBeTruthy();
    });
});
