import React from "react";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

function AboutCard() {
  const { t } = useTranslation("about");
  const interests = t("card.interests", { returnObjects: true });

  return (
    <Card className="bg-card/80">
      <CardContent className="p-5">
        <blockquote className="m-0">
          <p className="text-text-secondary text-justify leading-relaxed">
            {t("card.intro")}
            <br />
            <br />
            {t("card.currentRole")}
            <br />
            <br />
            {t("card.experience")}
            <br />
            <br />
            {t("card.platforms")}
            <br />
            <br />
            {t("card.strengths")}
            <br />
            <br />
            {t("card.outside")}
          </p>
          <ul className="mt-4 space-y-2 list-none p-0">
            {(Array.isArray(interests) ? interests : []).map((item) => (
              <li key={item} className="flex items-center gap-2 text-text-secondary">
                <ImPointRight className="text-accent shrink-0" /> {item}
              </li>
            ))}
          </ul>

          <p className="text-text-secondary italic mt-4">
            &quot;{t("card.quote")}&quot;
          </p>
          <footer className="text-sm text-text-secondary mt-2">{t("card.quoteAuthor")}</footer>
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
