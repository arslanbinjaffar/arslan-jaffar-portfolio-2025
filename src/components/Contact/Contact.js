import React, { useState } from "react";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

function Contact() {
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
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingSubmissions = JSON.parse(
        localStorage.getItem("contact_submissions") || "[]"
      );
      existingSubmissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now(),
      });
      localStorage.setItem(
        "contact_submissions",
        JSON.stringify(existingSubmissions)
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <Section className="relative">
      <Particle />
      <Container>
        <PageHeading
          accent="Touch"
          subtitle="Feel free to reach out for remote freelance, part-time work, or collaboration."
        >
          Get In
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
                  Send me a message
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Label htmlFor="name" className="text-accent mb-1.5">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
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
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error">{errors.email}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="message" className="text-accent mb-1.5">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message here (min 10 characters)..."
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-error">{errors.message}</p>
                    )}
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" disabled={submitted} className="w-full">
                      {submitted ? "Message Sent! ✓" : "Send Message"}
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
                  Contact Information
                </h4>

                {[
                  { icon: "📧", label: "Email", value: "arslanbinjaffar12000@gmail.com", href: "mailto:arslanbinjaffar12000@gmail.com" },
                  { icon: "📍", label: "Location", value: "Lahore, Pakistan" },
                  { icon: "💼", label: "Availability", value: "Open for remote freelance & part-time contracts" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 mb-6">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <p className="text-sm text-accent font-medium">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-text-secondary hover:text-accent transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text-secondary text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <h5 className="text-text-primary font-semibold mt-8 mb-4">Follow Me</h5>
                <div className="flex gap-4">
                  {[
                    { href: "https://www.linkedin.com/in/arslanbinjaffar", icon: FaLinkedin, hover: "hover:text-social-linkedin" },
                    { href: "https://github.com/arslanbinjaffar", icon: FaGithub, hover: "hover:text-social-github" },
                    { href: "https://twitter.com/arslan_jaffar", icon: FaTwitter, hover: "hover:text-social-twitter" },
                    { href: "mailto:arslan.jaffar@gmail.com", icon: FaEnvelope, hover: "hover:text-social-email" },
                  ].map(({ href, icon: Icon, hover }) => (
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
      </Container>
    </Section>
  );
}

export default Contact;
