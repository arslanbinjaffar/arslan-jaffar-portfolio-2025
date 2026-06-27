import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation("home");
  const strings = t("typewriter", { returnObjects: true });

  return (
    <Typewriter
      options={{
        strings: Array.isArray(strings) ? strings : [],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
