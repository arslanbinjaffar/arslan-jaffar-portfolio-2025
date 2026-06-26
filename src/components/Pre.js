import React from "react";
import preloaderSvg from "../Assets/pre.svg";

function Pre({ load }) {
  return (
    <div
      className={`fixed inset-0 z-[999999] flex items-center justify-center bg-bg-primary bg-no-repeat bg-center transition-opacity duration-500 ${
        load ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundImage: `url(${preloaderSvg})` }}
      aria-hidden={!load}
    />
  );
}

export default Pre;
