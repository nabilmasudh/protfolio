import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { FaBars, FaHome } from "react-icons/fa";
import { link, social } from "../data";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showLink, setShowLink] = useState(false)
  const linksContainerRef = useRef(null)
  const linskRef = useRef(null)


  useEffect(()=>{
    const linksHeight = linskRef.current.getBoundingClientRect().height;
    if(showLink){
      linksContainerRef.current.style.height = `${linksHeight}px`;
    }else{
      linksContainerRef.current.style.height = `0px`;
    }
  })
  return (
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <FaHome />
        </Link>
        <button className="nav-toggle" onClick={() => setShowLink(!showLink)}>
          <FaBars />
        </button>
      </div>

      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linskRef}>
          {link.map((item) => {
            const { id, url, text } = item;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="social-icon">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url} target="_blank" rel="noreferrer">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
