import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateAccount from "./CreateAccount";

describe("test the create account page", () => {
  const { getByRole, getByLabelText } = render(<CreateAccount />);


  it("should contain a form with the name, email, password field, and submit button", () => {
    expect(getByRole("form")).toBeTruthy();
    expect(getByLabelText("Name")).toBeTruthy();
    expect(getByLabelText("Email")).toBeTruthy();
    expect(getByLabelText("Password")).toBeTruthy();
    expect(getByRole("button")).toBeTruthy();
  });

  describe("test interaction with the form", () => {
    it("should be able to type into the name field", () => {
      const nameInput = getByLabelText("Name");
      userEvent.type(nameInput, "John Doe");
    });
  });
});