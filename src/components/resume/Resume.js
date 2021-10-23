import React from 'react'
import AboutResume from './AboutResume';
import BuildResumeList from "./BuildResumeList";
import ServicesResume from './ServicesResume';
import "./Resume.css";
import SkillResumeList from './SkillResumeList';

export default function Resume() {
    return (
      <div>
        <AboutResume />
        <BuildResumeList />
        <ServicesResume />
        <SkillResumeList />
      </div>
    );
}
