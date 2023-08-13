import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { ImageUser } from ".";

describe("<ImageUser />", () => {
  it("should render", () => {
    renderTheme(<ImageUser>Children</ImageUser>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
