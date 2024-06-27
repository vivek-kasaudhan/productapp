import React from 'react'
import'./header.css'
import { menu_list } from '../../assets/assets'

const Header = ({category,setcategory}) => {
  return (
    <div className="header-menu-list">
        <h3>Product Category</h3>
    <div className='menu-lists'>
      {menu_list.map((item,id)=>{
        return (
            <div className='menu-list-item' key={id} onClick={()=>setcategory(prev=>prev===item.menu_name?'All':item.menu_name)}>
              <img className={category===item.menu_name?'active':''} src={item.menu_image}/>
              <p>{item.menu_name}</p>
            </div>
            )

      })}
    </div>
    <hr/>
    </div>
  )
}

export default Header