import React from 'react'
import './DataText.css'
export default function DataText({icon, title, name}) {
    return (
      <div className="data-text">
        <div className='icon text'>{icon}{' '}</div>
        <div className='title text'>{title}:</div>
        <div className='name text'>{name}</div>
      </div>
    );
}
