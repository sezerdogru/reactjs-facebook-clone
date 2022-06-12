import React from 'react'
import '../styles/Header.scss'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import {   IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 

function Header() { 
 	const user = {
 		photoURL:"https://avatars.githubusercontent.com/u/10113841?v=4",
 		displayName: "Mick Thomson"
 	}
 	
	return (

		<header className="header">
			<div className="header__left">
				<img
					src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png'
					alt=''
				/>
				<div className='header__input'>
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header__center">
				<div className="header__option header__option--active">

					<HomeIcon fontSize="large" />
				</div>
				<div className="header__option">

					<FlagIcon fontSize="large" />
				</div>
				<div className="header__option">

					<SubscriptionsOutlinedIcon fontSize="large" />
				</div>
				<div className="header__option">

					<StorefrontOutlinedIcon fontSize="large" />
				</div>
				<div className="header__option">

					<SupervisedUserCircleIcon fontSize="large" />
				</div>
			</div>
			<div className="header__right"> 
				<div className="header__info">
					<img src={user.photoURL} alt='' />
					<span>{user.displayName.split(" ")[0]}</span>
				</div>

				<IconButton>
					<AddIcon />
				</IconButton>
				<IconButton>
					<ForumIcon />
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon />
				</IconButton>
				<IconButton>
					<ExpandMoreIcon />
				</IconButton>
			</div>
		</header>
	)
}


export default Header