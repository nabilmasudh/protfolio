import React from 'react'
import { Button } from '@mui/material';

export default function Project({items}) {
    return (
      <div className="project-center">
        {items.map((menuItem) => {
          const { id, img, title, desc } = menuItem;
          return (
            <div key={id} className="project-inner">
              <div>
                <img src={img} alt="" />
                <span>{title}</span>
                <p>{desc}</p>
              </div>
              <div className="project-inner-button">
                <Button variant="outlined">view source code</Button>
                <Button variant="outlined">view Project </Button>
              </div>
            </div>
          );
        })}
      </div>
    );
}
