import React, { useState } from 'react'
import './Sidebar.css';
import home from '../../imgs/homee.jpg'

import { SidebarData } from '../../Data/Data.js';




const Sidebar = () => {

  const [selected, setSelected] = useState(0);


  return (
    <div className="Sidebar">
        {/* logo */}
        <div className="logo">
            <img src={home} alt='home icon'/>
            <span>Shops</span>
        </div>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return(
              <div className={selected === index? 'menuItem active' : 'menuItem' }
              key={index} onClick={() => setSelected(index)}>
                
                <item.icon size={24} className="menuIcon"/>
                <span>
                  {item.heading}
                </span>
              </div>
            )

          })};
           
        </div>
    </div>
  );
};

export default Sidebar;