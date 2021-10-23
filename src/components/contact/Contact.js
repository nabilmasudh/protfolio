import React from 'react'
import ContactData from './ContactData';
import Form from './Form';
import './Contact.css'
export default function Contact() {
    return (
      <div className="contact-center">
        <Form />
        <ContactData />
      </div>
    );
}
