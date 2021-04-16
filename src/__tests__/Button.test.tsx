import React from "react";
import { render } from "@testing-library/react";
import Button, { ButtonProps } from "components/Button";

function renderComponent(props: Partial<ButtonProps> = {}) {
  const defaultProps: ButtonProps = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
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

export default {};
