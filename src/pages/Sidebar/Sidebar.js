import React from 'react';
import '../../styles/Sidebar.scss'
import SidebarRow from './SidebarRow'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'; 
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; 

function Sidebar() { 
	const user = {}
	return (
		<div className="sidebar">
			<SidebarRow src={user.photoURL} title={user.displayName} /> 
			<SidebarRow Icon={PeopleIcon} title="Friends" />
			<SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
			<SidebarRow Icon={ChatIcon} title="Messenger" />
			<SidebarRow Icon={StorefrontIcon} title="Marketplace" />
			<SidebarRow Icon={VideoLibraryIcon} title="Watch" />
			<SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" /> 
		</div>
	)
}

export default Sidebar;