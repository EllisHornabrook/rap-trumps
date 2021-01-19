import React from "react";
import { render } from "@testing-library/react";
import CardFront from "./CardFront";

describe("CardFront tests", () => {
    it("should render", () => {
        expect(render(<CardFront />)).toBeTruthy();
    });
});
