import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio navbar brand", () => {
  render(<App />);
  const brandElement = screen.getByText("AJ.");
  expect(brandElement).toBeInTheDocument();
});
