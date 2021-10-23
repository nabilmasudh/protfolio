import React from 'react'
import { GrResume } from "react-icons/gr";
import { BsFillBagFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
import Title from '../Title';
import './Resume.css'
import BuildResume from './BuildResume'
import ResumeTitle from './ResumeTitle';

export default function BuildResumeList() {
    return (
      <>
        <Title icon={<GrResume />} title="My Resume" />
        <div className="build-resume-center">
          <div className="build-resume">
            <ResumeTitle icon={<BsFillBagFill />} title="Project" />
            <BuildResume icon={<BiRadioCircleMarked />} capitalText="BSC" />
            <BuildResume icon={<BiRadioCircle />} smallText="2021-present" />
            <BuildResume
              icon={<BiRadioCircle />}
              smallText="the 4th year course i completed in 5 years beacuse covid19"
            />
            <BuildResume icon={<BiRadioCircleMarked />} capitalText="Diploma" />
            <BuildResume icon={<BiRadioCircle />} smallText="2016-2020" />
            <BuildResume
              icon={<BiRadioCircle />}
              smallText="the 4th year course i completed in 5 years beacuse covid19"
            />
            <BuildResume icon={<BiRadioCircleMarked />} capitalText="SSC" />
            <BuildResume icon={<BiRadioCircle />} smallText="2013-2016" />
            <BuildResume
              icon={<BiRadioCircle />}
              smallText="the 2 year course i completed in 2 years was succesfully"
            />
          </div>

          <div className="build-resume">
            <ResumeTitle icon={<MdSchool />} title="Education" />
            <BuildResume icon={<BiRadioCircleMarked />} capitalText="BSC" />
            <BuildResume icon={<BiRadioCircle />} smallText="2021-present" />
            <BuildResume
              icon={<BiRadioCircle />}
              smallText="the 4th year course i completed in 5 years beacuse covid19"
            />
            <BuildResume icon={<BiRadioCircleMarked />} capitalText="Diploma" />
            <BuildResume icon={<BiRadioCircle />} smallText="2016-2020" />
            <BuildResume
              icon={<BiRadioCircle />}
              smallText="the 4th year course i completed in 5 years beacuse covid19"
            />
            <BuildResume icon={<BiRadioCircleMarked />} capitalText="SSC" />
            <BuildResume icon={<BiRadioCircle />} smallText="2013-2016" />
            <BuildResume
              icon={<BiRadioCircle />}
              smallText="the 2 year course i completed in 2 years was succesfully"
            />
          </div>
        </div>
      </>
    );
}
