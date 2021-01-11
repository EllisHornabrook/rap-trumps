import React from "react";
import { render } from "@testing-library/react";
import ResultPanel from "./ResultPanel";

describe("ResultPanel tests", () => {
  it("should render", () => {
    expect(render(<ResultPanel />)).toBeTruthy();
  });
});
