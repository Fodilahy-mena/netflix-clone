import React, { useState, useContext } from 'react';
import * as ROUTES from '../constants/routes';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import { Form } from '../components';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';


export default function Signin() {
	const [error, setError] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

	const isValid = emailAddress === '' || password === '';
	
	function handleSignin(event) {
		event.preventDefault();

		firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
			setEmailAddress('');
			setPassword('');
			setError('');
			history.push(ROUTES.BROUSE);
		}).catch((error) => setError(error.message));

	}
	return (
		<>
		<HeaderContainer>
			<Form>
				<Form.Title>Sign in</Form.Title>
				{error && <Form.Error>{error}</Form.Error>}

				<Form.Base onSubmit={handleSignin} method="POST">
					<Form.Input 
					placeholder="Email address"
					value={emailAddress}
					onChange={({target}) => setEmailAddress(target.value)}
					/>
					<Form.Input 
					placeholder="Password"
					value={password}
					type="password"
					autoComplete="off"
					onChange={({target}) => setPassword(target.value)}
					/>
					<Form.Submit disabled={isValid} type="submit">
						Sign in
					</Form.Submit>
					<Form.Text>
						New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by google reCAPTCHA.
					</Form.TextSmall>
				</Form.Base>
			</Form>
		</HeaderContainer>
		<FooterContainer/>
		</>
	);
}