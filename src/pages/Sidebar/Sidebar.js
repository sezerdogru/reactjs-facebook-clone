import React from 'react';
import '../../styles/Sidebar.scss'
import SidebarRow from './SidebarRow'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'; 
  

function Sidebar() { 
	const user = {
 		photoURL:"https://avatars.githubusercontent.com/u/10113841?v=4",
 		displayName: "Mick Thomson"
 	}

 	const menuItems = [
 		{src:"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png", title:"Friends"},
 		{src:"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png", title:"Groups"},
 		{src:"https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png", title:"Marketplace"},
 		{src:"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png", title:"Watch"},
 		{src:"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png", title:"Memories"},
 	]
 	
	return (
		<div className="sidebar">
			<SidebarRow src={user.photoURL} title={user.displayName} /> 
			{menuItems.map((menu,i)=>(
				<SidebarRow key={i} src={menu.src} title={menu.title} />
			))}
			<div className="sidebarRow">
		      <ExpandMoreOutlinedIcon />  
		      <span>See More</span> 
		    </div>
			<hr />
		</div>
	)
}

export default Sidebar;