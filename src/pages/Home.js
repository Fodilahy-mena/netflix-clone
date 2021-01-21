import React from 'react';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faqs';
import HeaderContainer from '../containers/header';
import {OptForm, Feature} from '../components';
export default function Home() {
    return (
        <>  
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited Films, TV programms and more</Feature.Title>
                    <Feature.Subtitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Adress"/>
                        <OptForm.Button>Try it now!</OptForm.Button>
                        <OptForm.Text>Ready to watch? Enter your email to create ot restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}
