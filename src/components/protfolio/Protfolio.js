import React, { useState } from 'react'
import './Protfolio.css'
import Title from '../Title';
import Category from './Category';
import Project from './Project';
import items from '../../data'
export default function Protfolio() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])


  const filterItems = (category) =>{
    if(category === 'all'){
      setCategories(items)
      return
    }
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }

    return (
      <>
        <Title title="Protfolio" />
        <div className="protfolio-center">
          <Category categories={categories} filterItems={filterItems}/>
          <Project items={menuItems}/>
        </div>
      </>
    );
}
