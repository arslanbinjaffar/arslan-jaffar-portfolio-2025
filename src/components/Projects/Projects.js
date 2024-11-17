import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import Amlwacher from "../../Assets/Projects/aml-watcher.png";
import eventbuizz from "../../Assets/Projects/eventbuizz.png";
import eventbuizzMob from "../../Assets/Projects/eventbuizz mobile.png";
import ninjatraining from "../../Assets/Projects/ninja-training.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventbuizzMob}
              isBlog={false}
              title="EventBuizz Mobile App"
              // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://play.google.com/store/apps/details?id=com.eventbuizz.app&hl=en&gl=US&pli=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventbuizz}
              isBlog={false}
              title="Eventcenter Web-app"
              description="I worked as a MERN developer on the Eventcenter project, a company product focused on managing event and program schedules. My responsibilities included developing and maintaining features for event timing, participant check-ins and check-outs, and other event-related functionalities. I ensured smooth integration between the frontend and backend while optimizing the system for performance and scalability. This project gave me valuable experience in handling real-time data, managing user interactions, and implementing secure, efficient workflows for event management."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="http://my.eventbuizz.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amlwacher}
              isBlog={false}
              title="Aml watcher App"
              description="I was currently working as a MERN developer on the AML Watcher application, a web solution owned by Enlatics Software Company. In this role, I contribute to the design, development, and maintenance of the application, focusing on leveraging the MERN stack to build a responsive, scalable, and secure platform. I collaborate with cross-functional teams to ensure seamless integration of front-end interfaces with back-end services, ensuring high performance and reliability. This project demonstrates my expertise in full-stack development, API design, and real-time data processing, aimed at providing a robust solution for anti-money laundering monitoring."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://amlwatcher.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ninjatraining}
              isBlog={false}
              title="Ninja Training App"
              description="Ninja Training App is a dynamic platform designed to help users train like a ninja. The app offers multiple training modules, each focused on different aspects of physical and mental strength, agility, and combat skills. Users can follow step-by-step workout routines, track their progress, and improve their skills through interactive exercise animations. Additionally, trainers can register to create their own training programs, allowing them to share their expertise with others. The app creates a unique experience for both trainees and trainers, making fitness fun, engaging, and accessible to all."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://ninja-training-alpha.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://new-portfolio-one-murex.vercel.app/assets/schesti-30412cf1.png"
              }
              isBlog={false}
              title="Hasty App"
              description="Hasty App is a comprehensive platform designed to 
              streamline and manage real estate projects, focusing on the
               collaboration between contractors, subcontractors, and property owners.
                The app facilitates seamless project management, task coordination, and communication, helping all parties stay aligned throughout the construction process. Whether you're a contractor, subcontractor, or property owner, Hasty App provides the tools to ensure efficiency, transparency, and timely project delivery. "
              ghLink="https://github.com/arslanbinjaffar/hasty-next-app"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://new-portfolio-one-murex.vercel.app/assets/martialarts-006667b9.png"
              }
              isBlog={false}
              title="Martial Arts"
              description="Martial Arts is a dynamic platform designed for martial arts trainers and enthusiasts. It features a seamless trainer sign-up and sign-in system, allowing instructors to easily create profiles and manage their sessions. The app also includes interactive animations for various training exercises, providing users with visual guides to help improve their technique and performance. Whether you're a trainer looking to engage with students or a practitioner aiming to refine your skills, this app combines functionality with a rich, user-friendly experience."
              ghLink="https://github.com/arslanbinjaffar/martial-art-school"
              demoLink="https://martial-art-school-2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                "https://new-portfolio-one-murex.vercel.app/assets/fb-724d47b8.png"
              }
              isBlog={false}
              title="Facebook Clone"
              description="Facebook Clone is a social media platform built with React.js, replicating the core features of Facebook. Users can sign up, log in, and post updates, images, and videos on their timeline. The app includes a dynamic feed, real-time notifications, and interactive comment and like functionalities, creating a seamless social experience. With a sleek and responsive design, this clone mimics the user interface and user experience of Facebook while showcasing the power of React for building modern web applications."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
