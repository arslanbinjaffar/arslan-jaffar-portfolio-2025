import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./i18n";

test("renders portfolio navbar brand", async () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  const brandElements = await screen.findAllByAltText("Arslan Jaffar");
  expect(brandElements.length).toBeGreaterThan(0);
});
