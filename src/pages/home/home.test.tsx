import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import Home from "./home";

describe("Test the home element", () => {
  const { getByText, getByRole } = render(<Home />);

  it("should render the home element", () => {
    // genius test courtesy of github copilot
    expect(true).toBe(true);
    
    expect(getByRole("title")).toBeTruthy();
    expect(getByRole("description")).toBeTruthy();
    expect(getByRole("image")).toBeTruthy();
  });
});