import React from 'react'

export default function Project({items}) {
    return (
        <div className='protfolio-project'>
            {items.map((menuItem)=>{
                const {id, img, title, desc} = menuItem;
                return <div key={id} className='project-center'>
                    <img src={img} alt=''/>
                    <span>{title}</span>
                    <p>{desc}</p>
                </div>
            })}
        </div>
    )
}
