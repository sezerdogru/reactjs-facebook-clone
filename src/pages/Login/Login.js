import React from 'react';
import './Login.css'
import { Button } from '@mui/material';
import { GoogleAuthProvider, auth, provider, signInWithPopup } from "../../firebase"
import { actionTypes } from '../../store/reducer'
import { useStateValue } from '../../store/StateProvider'

function Login() {
	const [state, dispatch] = useStateValue()


	const signIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				dispatch({
					type: actionTypes.SET_USER,
					user
				})
			}).catch((error) => {
				const errorMessage = error.message;
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(errorMessage)
			});

	}
	return (
		<div className="login">

			<div className="login__logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
					alt=""
				/>
				<img
					src="https://marka-logo.com/wp-content/uploads/2020/04/Facebook-Logo.png"
					alt=""
				/>
			</div>
			<Button type="submit" onClick={signIn}>
				Sign In
			</Button>

		</div>
	)
}

export default Login;