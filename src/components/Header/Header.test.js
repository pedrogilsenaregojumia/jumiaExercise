import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render Header component", () => {
  render(<Header />);
  const mainElement = screen.getByTestId("header");
  expect(mainElement).toBeInTheDocument();
});

test("should render development warning", () => {
  render(<Header devEndpoint={true} />);
  const mainElement = screen.getByTestId("dev-endpoint-header");
  expect(mainElement).toBeInTheDocument();
});
