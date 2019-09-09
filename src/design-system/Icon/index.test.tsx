import Icon from "./";
import React from "react";
import { render } from "@testing-library/react";

describe("Icon", () => {
  test("Test default styles", () => {
    const name = "View";
    const { getByTestId } = render(<Icon name={name} />);
    const icon = getByTestId("icon");
    expect(icon).toHaveStyleRule("width", "1em");
    expect(icon).toHaveStyleRule("height", "1em");
    expect(icon).toHaveAttribute("viewBox", "0 0 1024 1024")
  });

  test("Test custom styles", () => {
    const name = "Lock";
    const { getByTestId } = render(<Icon name={name} data-testid="custom-id"/>);
    const icon = getByTestId("custom-id");
    expect(icon).toBeInTheDocument();
  });

  test("Test icon with wrong name", () => {
    const name = "wrongIconName";
    const { queryByTestId } = render(<Icon name={name} />);
    const icon = queryByTestId("icon");
    expect(icon).toBeNull();
  });
});
