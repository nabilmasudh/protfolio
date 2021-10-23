import React from 'react'
import "./Resume.css";
export default function BuildResume({icon, capitalText, smallText}) {
    return (
      <div className="build-resume-inner">
        <div className='icon'>{icon}</div>
        <span>{capitalText}</span>
        <p>{smallText}</p>
      </div>
    );
}
