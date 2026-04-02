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
            With over <span className="purple">4+ years of professional experience</span>,
            I specialize in building scalable and high-performance products
            across <span className="purple">web, backend, and cloud environments</span>.
            <br />
            <br />
            I have led engineering delivery on enterprise-scale platforms such as{" "}
            <span className="purple">EventCenter</span>,{" "}
            <span className="purple">AI Fleet Management ERP</span>, and{" "}
            <span className="purple">operations-focused business systems</span>.
            My day-to-day work includes architecture decisions, mentoring, PR
            reviews, and building reliable features end-to-end.
            <br />
            <br />
            My core strengths include{" "}
            <span className="purple">Node.js, NestJS, Express.js, React.js, Next.js</span>,{" "}
            <span className="purple">PostgreSQL, MongoDB, Redis</span>, and modern DevOps
            workflows with <span className="purple">Docker, Kubernetes, and CI/CD</span>.
            I also work with asynchronous architecture using{" "}
            <span className="purple">RabbitMQ and BullMQ</span> to design performant
            and maintainable systems.
            <br />
            <br />
            Outside of development, I enjoy learning new technologies,
            collaborating with teams, and building products that solve real
            business problems.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> System Design and Architecture Research
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring and Team Collaboration
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects and Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build systems that scale, teams that grow, and products that matter."{" "}
          </p>
          <footer className="blockquote-footer">Arslan Jaffar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
