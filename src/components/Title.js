import React from "react";
import './Title.css'
function Title({ icon, title }) {
  return (
    <div className="all-title">
      {icon} {title}
    </div>
  );
}

export default Title;
