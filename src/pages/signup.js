import React, {useState} from 'react';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isValid = firstName === '' || emailAddress === '' || password === '';

    function handleSignup(event) {
        event.preventDefault();

    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input 
                        type="text" 
                        value={firstName}
                        onChange={({target}) => setFirstName(target.value)}
                        placeholder="First Name"
                        />
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
                            Sign up
                        </Form.Submit>
                        <Form.Text>
						    Already have an account. <Form.Link to="/signin">Sign In.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}
