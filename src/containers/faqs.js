import React from 'react';
import {Accordion, OptForm} from '../components';
import { Item } from '../components/jambotron/styles/jumbotron';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
                {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>
                        {item.header}
                    </Accordion.Header>
                    <Accordion.Body>
                        {item.body}
                    </Accordion.Body>
                </Accordion.Item>
                ))}
            </Accordion.Frame>
            <OptForm>
                <OptForm.Input placeholder="Email Adress"/>
                <OptForm.Button>Try it now!</OptForm.Button>
                <OptForm.Text>Ready to watch? Enter your email to create ot restart your membership.</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}
