import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio navbar brand", () => {
  render(<App />);
  const brandElements = screen.getAllByAltText("Arslan Jaffar");
  expect(brandElements.length).toBeGreaterThan(0);
});
