import React from 'react'
import Title from '../Title';
import { FcAbout } from "react-icons/fc";
import './Resume.css'
export default function AboutResume() {
    return (
      <div className="resume-about-center">
        <Title icon={<FcAbout />} title="About Me" />
        <div className="resume-about">
          <p>
            Recent College graduate with a background in web development.
            Excellent focus, communication, and ability to learn rapidly. Excels
            working in a team environment. Strong critical analysis and
            problem-solving.
          </p>
          <p>
            I'm a fast learner and can quickly integrate into a team. So I can
            provide value to the company and the customer
          </p>
        </div>
      </div>
    );
}
