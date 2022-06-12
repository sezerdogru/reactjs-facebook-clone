import React, {useEffect} from 'react';
import '../styles/Login.scss'
import { Button } from '@mui/material'; 
import {useNavigate} from "react-router-dom"; 

function Login() {  

	const navigate = useNavigate();

	useEffect(() => {
		document.title = "Facebook Clone – log in or sign up";
	},[])

	const signIn = (e) => { 
		e.preventDefault()
		navigate('/dashboard')
	}
	return (
		<div className="login"> 
			<div className="login__logo"> 
				<img
					src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
					alt=""
				/>
				<span>Facebook helps you connect and share with the people in your life.</span>
			</div>
			<div className="login__form"> 
				<div>
					<form>
						<input type="text" placeholder="Email address or phone number" />
						<input type="password" placeholder="Password" /> 
						<Button className="login__button" type="submit" onClick={signIn}>Log In</Button> 
						<a href="">Forgotten password?</a>
						<hr />
						<Button className="login__button--create" type="submit" onClick={(e) => e.preventDefault()}>Create New Account</Button>
					</form>  
				</div>
				<span><a href="">Create a Page</a> for a celebrity, brand or business.</span>
			</div> 
		</div>
	)
}

export default Login;