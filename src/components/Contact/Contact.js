import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
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
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-heading">
            Get In <strong className="purple">Touch</strong>
          </h1>
          <p style={{ color: "#9d9dc7", marginBottom: "50px", textAlign: "center" }}>
            Feel free to reach out for collaboration or just a friendly hello.
          </p>
        </motion.div>

        <Row style={{ justifyContent: "center" }}>
          {/* Contact Form */}
          <Col lg={6} style={{ marginBottom: "30px" }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-form-wrapper">
                <h4 style={{ color: "white", marginBottom: "25px", fontWeight: "700" }}>
                  Send me a message
                </h4>
                
                <Form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "#c770f0" }}>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input"
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Email Field */}
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "#c770f0" }}>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input"
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Message Field */}
                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: "#c770f0" }}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Your message here (min 10 characters)..."
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-input"
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="contact-submit-btn"
                      type="submit"
                      disabled={submitted}
                    >
                      {submitted ? "Message Sent! ✓" : "Send Message"}
                    </Button>
                  </motion.div>
                </Form>
              </div>
            </motion.div>
          </Col>

          {/* Contact Links & Social */}
          <Col lg={6} style={{ marginBottom: "30px" }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-info-wrapper">
                <h4 style={{ color: "white", marginBottom: "30px", fontWeight: "700" }}>
                  Contact Information
                </h4>

                {/* Quick Links */}
                <div className="contact-link-row">
                  <div className="contact-info-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <p className="contact-label">Email</p>
                      <a href="mailto:arslan@example.com" className="contact-info-text">
                        arslan.jaffar@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-link-row">
                  <div className="contact-info-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <p className="contact-label">Location</p>
                      <p className="contact-info-text">Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className="contact-link-row">
                  <div className="contact-info-item">
                    <div className="contact-icon">💼</div>
                    <div>
                      <p className="contact-label">Availability</p>
                      <p className="contact-info-text">Open for collaboration & opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <h5 style={{ color: "white", marginTop: "40px", marginBottom: "20px" }}>
                  Follow Me
                </h5>
                <div className="contact-social-links">
                  <motion.a
                    href="https://linkedin.com/in/arslan-jaffar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-btn linkedin"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://github.com/arslan-jaffar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-btn github"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/arslan_jaffar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-btn twitter"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a
                    href="mailto:arslan.jaffar@gmail.com"
                    className="social-link-btn email"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
