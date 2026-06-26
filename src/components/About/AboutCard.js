import React from "react";
import { ImPointRight } from "react-icons/im";
import { Card, CardContent } from "@/components/ui/card";

function AboutCard() {
  return (
    <Card className="bg-card/80">
      <CardContent className="p-5">
        <blockquote className="m-0">
          <p className="text-text-secondary text-justify leading-relaxed">
            Hi Everyone, I am <span className="text-accent">Arslan Jaffar </span>
            from <span className="text-accent">Lahore, Pakistan.</span>
            <br />
            I am currently working as a{" "}
            <span className="text-accent">Senior Software Engineer @ PixelPK</span> and{" "}
            <span className="text-accent">AI Systems Engineer / Team Lead @ Beyond Technologies</span>.
            <br />
            With over <span className="text-accent">4+ years of professional experience</span>,
            I specialize in building scalable and high-performance products
            across <span className="text-accent">web, backend, cloud, and AI systems</span>.
            <br />
            <br />
            I have led engineering delivery on enterprise-scale platforms such as the{" "}
            <span className="text-accent">Enterprise AI Assistant Platform</span>,{" "}
            <span className="text-accent">Pakistan Lawbot</span>,{" "}
            <span className="text-accent">AI Fleet Management ERP</span>, and{" "}
            <span className="text-accent">operations-focused business systems</span>.
            My day-to-day work includes architecture decisions, AI orchestration, mentoring, PR
            reviews, and building reliable features end-to-end.
            <br />
            <br />
            My core strengths include{" "}
            <span className="text-accent">Node.js, NestJS, Python, React.js, Next.js</span>,{" "}
            <span className="text-accent">RAG, LangGraph, LangChain, LLM orchestration, and MCP</span>,{" "}
            <span className="text-accent">PostgreSQL, MongoDB, Redis, Qdrant</span>, and modern DevOps
            workflows with <span className="text-accent">Docker, Kubernetes, and CI/CD</span>.
            I also work with asynchronous architecture using{" "}
            <span className="text-accent">RabbitMQ and BullMQ</span> to design performant
            and maintainable systems.
            <br />
            <br />
            Outside of development, I enjoy collaborating with teams and building products
            that solve real business problems.
          </p>
          <ul className="mt-4 space-y-2 list-none p-0">
            <li className="flex items-center gap-2 text-text-secondary">
              <ImPointRight className="text-accent shrink-0" /> Learning AI Engineering (RAG, agents, LLM orchestration, MCP)
            </li>
            <li className="flex items-center gap-2 text-text-secondary">
              <ImPointRight className="text-accent shrink-0" /> System Design and Architecture Research
            </li>
            <li className="flex items-center gap-2 text-text-secondary">
              <ImPointRight className="text-accent shrink-0" /> Mentoring and Team Collaboration
            </li>
          </ul>

          <p className="text-text-secondary italic mt-4">
            &quot;Build systems that scale, teams that grow, and products that matter.&quot;
          </p>
          <footer className="text-sm text-text-secondary mt-2">— Arslan Jaffar</footer>
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
