import React from "react";
import { render } from "@testing-library/react";
import CardBack from "./CardBack";

describe("CardBack tests", () => {
  it("should render", () => {
    expect(render(<CardBack />)).toBeTruthy();
  });
});
