import React from 'react'
import "./Resume.css";
export default function SkillResume({icon, text}) {
    return (
      <div className='skill-inner-center'>
        <div className='icon'>{icon}</div>
        <span>{text}</span>
      </div>
    );
}
