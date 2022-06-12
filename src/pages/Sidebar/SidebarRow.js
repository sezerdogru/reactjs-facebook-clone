import React from 'react';
import '../../styles/SidebarRow.scss' 

function SidebarRow({ src, title }) {
  return (
    <div className="sidebarRow">
      <img src={src} />  
      <span>{title}</span> 
    </div>
  )
}

export default SidebarRow;