import React from 'react'
import "./Resume.css";
import SkillResume from './SkillResume';
import { FiDatabase } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { GrResources } from "react-icons/gr";
import { DiReact, DiCss3, DiSass, DiGit } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { AiOutlineConsoleSql, AiOutlineGithub } from "react-icons/ai";
import { SiMaterialui, SiTailwindcss, SiFirebase } from "react-icons/si";
export default function SkillResumeList() {
    return (
      <div className="resume-skill-center">
        <div className="resume-skill">
          <SkillResume icon={<CgWebsite />} text="FRONT-END" />
          <SkillResume icon={<DiReact />} text="React js" />
          <SkillResume icon={<IoLogoJavascript />} text="Javascript" />
          <SkillResume icon={<BsBootstrap />} text="Bootstrap" />
          <SkillResume icon={<DiCss3 />} text="CSS" />
          <SkillResume icon={<DiSass />} text="SCSS" />
          <SkillResume icon={<SiMaterialui />} text="Material ui" />
          <SkillResume icon={<SiTailwindcss />} text="Tailwind CSS" />
        </div>
        <div className="resume-skill">
          <SkillResume icon={<FiDatabase />} text="DATABASE" />
          <SkillResume icon={<SiFirebase />} text="Firebase" />
          <SkillResume icon={<AiOutlineConsoleSql />} text="SQL" />
        </div>
        <div className="resume-skill">
          <SkillResume icon={<GrResources />} text="SOURCE CONTROL" />
          <SkillResume icon={<DiGit />} text="Git" />
          <SkillResume icon={<AiOutlineGithub />} text="Github" />
        </div>
      </div>
    );
}
