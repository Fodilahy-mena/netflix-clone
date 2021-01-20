import React from 'react';
import { Footer } from '../components'

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact Us</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to watch</Footer.Link>
                    <Footer.Link href="#">Corporate Informations</Footer.Link>
                    <Footer.Link href="#">Netflix Original</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem gift crds</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Buy gift cards</Footer.Link>
                    <Footer.Link href="#"></Footer.Link>
                    <Footer.Link href="#">Cookie preferance</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Netflix Madagascar</Footer.Text>
        </Footer>
    )
}
