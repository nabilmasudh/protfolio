import React from 'react'
import IntroData from "./IntroData";
import IntroPhoto from './IntroPhoto'
import './Intro.css'

export default function Intro() {
    return (
      <div className="intro-center">
        <IntroData />
        <IntroPhoto />
      </div>
    );
}
