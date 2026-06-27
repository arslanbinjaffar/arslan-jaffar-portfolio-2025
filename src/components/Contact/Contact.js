import React, { useState } from "react";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

import Particle from "../Particle";

import {

  FaLinkedin,

  FaGithub,

  FaEnvelope,

  FaTwitter,

  FaWhatsapp,

} from "react-icons/fa";

import Container from "../ui/Container";

import Section from "../ui/Section";

import PageHeading from "../ui/PageHeading";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import Seo from "../Seo";

import { useRouteSeo } from "@/hooks/useRouteSeo";

import { contactConfig, siteConfig, socialLinks } from "@/config/site";

import CopyEmailButton from "../CopyEmailButton";



function Contact() {

  const { t } = useTranslation("contact");

  const { t: tc } = useTranslation("common");

  const seo = useRouteSeo("/contact");



  const [formData, setFormData] = useState({

    name: "",

    email: "",

    message: "",

  });

  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({});



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

  };



  const validateForm = () => {

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = t("validation.nameRequired");

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = t("validation.emailRequired");

    }

    if (!formData.message.trim() || formData.message.length < 10) {

      newErrors.message = t("validation.messageRequired");

    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    };

    if (siteConfig.contactFormUrl) {
      try {
        const response = await fetch(siteConfig.contactFormUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Form submission failed");
      } catch {
        setErrors({ form: t("validation.submitFailed") });
        return;
      }
    } else {
      const existingSubmissions = JSON.parse(
        localStorage.getItem("contact_submissions") || "[]"
      );
      existingSubmissions.push(payload);
      localStorage.setItem(
        "contact_submissions",
        JSON.stringify(existingSubmissions)
      );
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };



  const contactInfo = [

    {

      icon: "📧",

      label: t("labels.email"),

      value: contactConfig.email,

      href: `mailto:${contactConfig.email}`,

    },

    {

      icon: "📍",

      label: t("labels.location"),

      value: contactConfig.location,

    },

    {

      icon: "💼",

      label: t("labels.availability"),

      value: tc("site.availability"),

    },

  ];



  if (socialLinks.whatsapp) {

    contactInfo.splice(1, 0, {

      icon: "💬",

      label: t("labels.whatsapp"),

      value: tc("footer.chatWhatsApp"),

      href: socialLinks.whatsapp,

      isWhatsApp: true,

    });

  }



  const chatLinks = [

    socialLinks.whatsapp && {

      href: socialLinks.whatsapp,

      label: tc("footer.chatWhatsApp"),

      icon: FaWhatsapp,

      hover: "hover:text-social-whatsapp hover:border-social-whatsapp",

    },

    {

      href: socialLinks.linkedinMessage,

      label: tc("social.linkedinMessage"),

      icon: FaLinkedin,

      hover: "hover:text-social-linkedin hover:border-social-linkedin",

    },

    {

      href: socialLinks.github,

      label: tc("social.viewGithub"),

      icon: FaGithub,

      hover: "hover:text-social-github hover:border-social-github",

    },

  ].filter(Boolean);



  const followLinks = [

    { href: socialLinks.linkedinMessage, icon: FaLinkedin, hover: "hover:text-social-linkedin" },

    { href: socialLinks.github, icon: FaGithub, hover: "hover:text-social-github" },

    { href: socialLinks.twitter, icon: FaTwitter, hover: "hover:text-social-twitter" },

    { href: `mailto:${contactConfig.email}`, icon: FaEnvelope, hover: "hover:text-social-email" },

  ];



  return (

    <Section className="relative">

      <Seo {...seo} path="/contact" />

      <Particle />

      <Container>

        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>

          {t("heading")}

        </PageHeading>



        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <motion.div

            initial={{ opacity: 0, x: -40 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.6 }}

          >

            <Card>

              <CardContent className="p-5">

                <h4 className="text-lg font-bold text-text-primary mb-6">

                  {t("formTitle")}

                </h4>

                <form onSubmit={handleSubmit}>

                  <div className="mb-4">

                    <Label htmlFor="name" className="text-accent mb-1.5">

                      {t("nameLabel")}

                    </Label>

                    <Input

                      id="name"

                      type="text"

                      name="name"

                      placeholder={t("namePlaceholder")}

                      value={formData.name}

                      onChange={handleChange}

                      aria-invalid={!!errors.name}

                    />

                    {errors.name && (

                      <p className="mt-1 text-sm text-error">{errors.name}</p>

                    )}

                  </div>

                  <div className="mb-4">

                    <Label htmlFor="email" className="text-accent mb-1.5">

                      {t("emailLabel")}

                    </Label>

                    <Input

                      id="email"

                      type="email"

                      name="email"

                      placeholder={t("emailPlaceholder")}

                      value={formData.email}

                      onChange={handleChange}

                      aria-invalid={!!errors.email}

                      dir="ltr"

                    />

                    {errors.email && (

                      <p className="mt-1 text-sm text-error">{errors.email}</p>

                    )}

                  </div>

                  <div className="mb-4">

                    <Label htmlFor="message" className="text-accent mb-1.5">

                      {t("messageLabel")}

                    </Label>

                    <Textarea

                      id="message"

                      name="message"

                      rows={5}

                      placeholder={t("messagePlaceholder")}

                      value={formData.message}

                      onChange={handleChange}

                      aria-invalid={!!errors.message}

                    />

                    {errors.message && (

                      <p className="mt-1 text-sm text-error">{errors.message}</p>

                    )}

                  </div>

                  {errors.form && (
                    <p className="mt-2 text-sm text-error">{errors.form}</p>
                  )}

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>

                    <Button type="submit" disabled={submitted} className="w-full">

                      {submitted ? tc("buttons.messageSent") : tc("buttons.sendMessage")}

                    </Button>

                  </motion.div>

                </form>

              </CardContent>

            </Card>

          </motion.div>



          <motion.div

            initial={{ opacity: 0, x: 40 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.6 }}

          >

            <Card className="h-full">

              <CardContent className="p-5">

                <h4 className="text-lg font-bold text-text-primary mb-6">

                  {t("infoTitle")}

                </h4>



                {contactInfo.map((item) => (

                  <div key={item.label} className="flex gap-4 mb-6">

                    <div className="text-2xl">{item.icon}</div>

                    <div>

                      <p className="text-sm text-accent font-medium">{item.label}</p>

                      {item.href ? (
                        item.label === t("labels.email") ? (
                          <div className="flex items-center gap-2">
                            <a
                              href={item.href}
                              className="text-text-secondary hover:text-accent transition-colors text-sm"
                              dir="ltr"
                            >
                              {item.value}
                            </a>
                            <CopyEmailButton variant="ghost" size="icon-xs" />
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            target={item.isWhatsApp ? "_blank" : undefined}
                            rel={item.isWhatsApp ? "noopener noreferrer" : undefined}
                            className="text-text-secondary hover:text-accent transition-colors text-sm"
                          >
                            {item.value}
                          </a>
                        )
                      ) : (

                        <p className="text-text-secondary text-sm">{item.value}</p>

                      )}

                    </div>

                  </div>

                ))}



                <h5 className="text-text-primary font-semibold mt-8 mb-4">

                  {t("chatTitle")}

                </h5>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">

                  {chatLinks.map(({ href, label, icon: Icon, hover }) => (

                    <motion.a

                      key={label}

                      href={href}

                      target="_blank"

                      rel="noopener noreferrer"

                      className={`flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-text-primary transition-colors ${hover}`}

                      whileHover={{ scale: 1.02 }}

                      whileTap={{ scale: 0.98 }}

                    >

                      <Icon className="text-lg shrink-0" />

                      <span>{label}</span>

                    </motion.a>

                  ))}

                </div>



                <h5 className="text-text-primary font-semibold mb-4">{t("followTitle")}</h5>

                {siteConfig.calendarUrl && (
                  <div className="mb-6">
                    <Button asChild className="w-full mb-4">
                      <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
                        {tc("buttons.bookCall")}
                      </a>
                    </Button>
                  </div>
                )}

                <div className="flex gap-4">

                  {followLinks.map(({ href, icon: Icon, hover }) => (

                    <motion.a

                      key={href}

                      href={href}

                      target="_blank"

                      rel="noopener noreferrer"

                      className={`flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-primary ${hover} transition-colors text-xl`}

                      whileHover={{ scale: 1.15 }}

                      whileTap={{ scale: 0.95 }}

                    >

                      <Icon />

                    </motion.a>

                  ))}

                </div>

              </CardContent>

            </Card>

          </motion.div>

        </div>

        {siteConfig.calendarUrl && (
          <motion.div
            className="max-w-5xl mx-auto mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg font-bold text-text-primary mb-4 text-center">
              {t("calendarTitle")}
            </h4>
            <div className="rounded-2xl overflow-hidden border border-border bg-card">
              <iframe
                src={siteConfig.calendarUrl}
                title={t("calendarTitle")}
                className="w-full min-h-[630px] border-0"
                loading="lazy"
              />
            </div>
          </motion.div>
        )}
      </Container>

    </Section>

  );

}



export default Contact;

