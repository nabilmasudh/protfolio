import React from 'react'
import {MdMiscellaneousServices} from 'react-icons/md'
import Title from '../Title'
import "./Resume.css";
import {services} from '../../data'

export default function ServicesResume() {
    return (
      <>
        <Title icon={<MdMiscellaneousServices />} title="My Services" />
        <div className="resume-service-center">
          {services.map((item)=>{
            const {id, icon, title, text} = item;
            return (
              <div className="resume-service" key={id}>
                <div className="icon">
                  {icon}
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </>
    );
}
