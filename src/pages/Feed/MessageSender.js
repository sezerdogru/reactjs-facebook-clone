import React  from 'react';
import { Avatar } from '@mui/material';
import '../../styles/MessageSender.scss'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'; 

function MessageSender() { 
	const user = {
 		photoURL:"https://avatars.githubusercontent.com/u/10113841?v=4",
 		displayName: "Mick Thomson"
 	} 

	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src={user.photoURL} />
				<form>
					<input 
						className="messageSender__input"
						placeholder={"Whats's on your mind ?"}
					/> 
				</form>

			</div>
			<hr />
			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideocamIcon style={{ color: 'red' }} />
					<span>Live video</span>
				</div>
				<div className="messageSender__option">
					<PhotoLibraryIcon style={{ color: 'green' }} />
					<span>Photo/Video</span>
				</div>
				<div className="messageSender__option">
					<InsertEmoticonIcon style={{ color: 'orange' }} />
					<span>Feeling/Activity</span>
				</div>
			</div>
		</div>
	)
}

export default MessageSender;