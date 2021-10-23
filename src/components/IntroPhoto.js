import React from 'react'
import image from "../assets/img/masudh.jpg";
import './IntroPhoto.css'
export default function IntroPhoto() {
    return (
      <div className="intro-photo">
        <img src={image} alt="" />
      </div>
    );
}
