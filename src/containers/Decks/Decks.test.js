import React from "react";
import { render } from "@testing-library/react";
import Decks from "./Decks";

describe("Decks tests", () => {
  it("should render", () => {
    expect(render(<Decks />)).toBeTruthy();
  });
});
