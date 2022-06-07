import React, {useState} from 'react';
import { Avatar } from '@mui/material';
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MessageSender  ( )  {

	const [input,setInput] = useState('')
	const [imageURL,setImageURL] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		setInput("")
		setImageURL("")
	}

	return (
		<div className="messageSender">
		<div className="messageSender__top">
			<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnu6obVk9X7KpF7ddIVK0Xukk7GK5uWC1GA&usqp=CAU"/>
			<form onSubmit={handleSubmit}>
				<input 
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className="messageSender__input"
				placeholder={"Whats's on your mind"}
				/>
				<input 
				value={imageURL}
				className="messageSender__input"
				onChange={(e) => setImageURL(e.target.value)}
				placeholder="image URL (Optional)" /> 
			</form>

		</div>
		<div className="messageSender__bottom">
			<div className="messageSender__option"> 
				<VideocamIcon style={{color:'red'}} />
				<h3>Live video</h3>
			</div>
			<div className="messageSender__option"> 
				<PhotoLibraryIcon style={{color:'green'}} />
				<h3>Photo/Video</h3>
			</div>
			<div className="messageSender__option"> 
				<InsertEmoticonIcon style={{color:'orange'}} />
				<h3>Feeling/Activity</h3>
			</div> 
		</div>
		</div>
		)
}

export default MessageSender;