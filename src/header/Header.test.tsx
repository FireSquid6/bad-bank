import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("test the header component", () => {
  it("should highlight the current page", () => {
    render(<Header path="/create-account" />);
    expect(screen.getByText(/Create Account/)).toHaveClass("text-orange-500");
  });
});
