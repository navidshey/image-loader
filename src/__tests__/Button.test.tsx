import React from "react";
import { render } from "@testing-library/react";
import Button, { ButtonProps } from "components/Button";

function renderComponent(props: Partial<ButtonProps> = {}) {
  const defaultProps: ButtonProps = {
    onClick() {},
    value: "load",
    name: "load",
    isLoading: false,
  };
  return render(<Button {...defaultProps} {...props} />);
}

describe("<Button>", () => {
  it("should show value", async () => {
    const { getByText } = renderComponent({
      error: undefined,
    });
    expect(getByText("load")).toBeTruthy();
  });

  it("should be disable while loading", async () => {
    const { getByText } = renderComponent({ isLoading: true });
    expect(getByText("load").closest("button")).toHaveAttribute("disabled");
  });
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {};
