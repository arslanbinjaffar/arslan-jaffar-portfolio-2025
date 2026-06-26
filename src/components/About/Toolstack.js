import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiJira,
  SiClickup,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import cusorCodeAi from "../../Assets/cusor_code_editor.webp";

const iconComponents = [
  SiMacos,
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiJira,
  SiClickup,
  FaCode,
];

function Toolstack() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-12">
      {iconComponents.map((Icon, i) => (
        <div
          key={i}
          className="flex items-center justify-center w-24 h-24 rounded-2xl border border-border bg-bg-secondary text-4xl text-text-primary hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300"
        >
          <Icon />
        </div>
      ))}
      <div className="flex items-center justify-center w-24 h-24 rounded-2xl border border-border bg-bg-secondary hover:border-accent hover:-translate-y-1 transition-all duration-300">
        <img src={cusorCodeAi} alt="Cursor AI" className="w-10 h-10 object-contain" />
      </div>
    </div>
  );
}

export default Toolstack;
