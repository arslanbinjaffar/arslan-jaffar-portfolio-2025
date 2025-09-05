import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arslan Jaffar </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently working as a{" "}
            <span className="purple">Senior Software Engineer (MERN)</span> and
            Team Lead at Beyond Technologies.
            <br />
            With over 3.5+ years of professional experience, I specialize in
            building scalable and high-performance web applications. My core
            expertise lies in <span className="purple">React.js</span> and
            modern JavaScript frameworks, with strong skills in{" "}
            <span className="purple">backend integration and API development</span>.
            <br />
            <br />
            I have led teams on enterprise-level projects such as{" "}
            <span className="purple">EventCenter</span> and{" "}
            <span className="purple">ERP Systems</span>, ensuring high-quality
            delivery, code reviews, and best practices. My responsibilities
            include designing backend services with{" "}
            <span className="purple">NestJS, Node.js, Express.js</span>, working
            with databases like <span className="purple">MySQL</span> and{" "}
            <span className="purple">PostgreSQL</span>, and setting up{" "}
            <span className="purple">GitLab CI/CD pipelines</span> for automated
            testing and deployments.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arslan Jaffar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
