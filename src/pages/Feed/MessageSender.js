import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import {useStateValue } from '../../store/StateProvider'
import db, {doc, collection, addDoc, Timestamp} from "../../firebase"

function MessageSender() {

	const [{user}, dispatch] = useStateValue()

	const [input, setInput] = useState('')
	const [imageURL, setImageURL] = useState('')

	const handleSubmit = e =>  {
		e.preventDefault()
		  addDoc(collection(db,"posts"), {
		  image: imageURL,
		  username: user.displayName,
		  message: input,
		  timestamp: Timestamp.fromDate(new Date()),
		  profilePic: user.photoURL,
		});
		setInput("")
		setImageURL("")
	}

	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src={user.photoURL} />
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
						<button type="submit" onClick={handleSubmit}></button>
				</form>

			</div>
			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<VideocamIcon style={{ color: 'red' }} />
					<h3>Live video</h3>
				</div>
				<div className="messageSender__option">
					<PhotoLibraryIcon style={{ color: 'green' }} />
					<h3>Photo/Video</h3>
				</div>
				<div className="messageSender__option">
					<InsertEmoticonIcon style={{ color: 'orange' }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	)
}

export default MessageSender;