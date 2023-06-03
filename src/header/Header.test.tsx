import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("test the header component", () => {
  it("should render the pages", () => {
    render(<Header />);
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByText(/Create Account/)).toBeInTheDocument();
    expect(screen.getByText(/Deposit/)).toBeInTheDocument();
    expect(screen.getByText(/Withdraw/)).toBeInTheDocument();
    expect(screen.getByText(/All Data/)).toBeInTheDocument();
  });
});
