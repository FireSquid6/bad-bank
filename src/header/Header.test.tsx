import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Header from './Header';

describe("Header", () => {
  const { getByText, getByDisplayValue } = render(<Header />);
  it("should have working links", () => {
    // check that the header is rendered
    expect(getByText("Create Account")).toBeTruthy();
    expect(getByText("Withdraw")).toBeTruthy();
    expect(getByText("Deposit")).toBeTruthy();
    expect(getByText("All Data")).toBeTruthy();
  });
  it("should have the active class if the link is active", () => {
    expect(getByText("Create Account").className).toContain("active");
  });
});