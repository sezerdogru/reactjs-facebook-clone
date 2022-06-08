import React from 'react';
import './SidebarRow.css'
import { Avatar, } from '@mui/material';

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} style={{height:30,width:30}} />}
      {Icon && <Icon />}

      <span>{title}</span>

    </div>
  )
}

export default SidebarRow;