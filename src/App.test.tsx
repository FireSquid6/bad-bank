import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test the app componenet", () => {
  it("should render the app", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
