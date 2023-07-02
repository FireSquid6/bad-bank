import Header from "./Header";
import { describe, afterEach, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn().mockReturnValue({ pathname: "/create-account" }),
}));

describe("test the header component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should highlight the current page", () => {
    render(<Header />);
    expect(screen.getByText(/Create Account/)).toHaveClass("text-orange-500");
  });
});
