import { useContext } from "react";
import { ThemeContext } from "@/App";
import portfolioLogoLight from "@/Assets/portfolio-logo.jpeg";
import portfolioLogoDark from "@/Assets/portfolio-logo-dark.jpeg";

function BrandLogo({ className = "h-9 w-auto", ...props }) {
  const { theme } = useContext(ThemeContext);
  const src = theme === "dark" ? portfolioLogoDark : portfolioLogoLight;

  return (
    <img
      src={src}
      alt="Arslan Jaffar"
      className={className}
      {...props}
    />
  );
}

export default BrandLogo;
