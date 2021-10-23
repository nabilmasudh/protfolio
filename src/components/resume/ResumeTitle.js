import React from 'react'
import './Resume.css'
export default function ResumeTitle({icon, title}) {
    return (
        <div className='build-title'>
            <div className='icon'>{icon}</div>
            <span>{title}</span>
        </div>
    )
}
