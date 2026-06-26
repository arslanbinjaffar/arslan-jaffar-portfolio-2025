import portfolioLogo from "@/Assets/portfolio-logo.jpeg";

function BrandLogo({ className = "h-9 w-auto", ...props }) {
  return (
    <img
      src={portfolioLogo}
      alt="Arslan Jaffar"
      className={className}
      {...props}
    />
  );
}

export default BrandLogo;
