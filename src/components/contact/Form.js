import React from 'react'
import TextArea from './TextArea'
import TextInput from './TextInput'
import './Form.css'
import Button from "@mui/material/Button";
import Title from '../Title'
export default function Form() {
    return (
      <div className="contact-form">
        <Title title="Contact Form" />
        <form>
          <TextInput />
          <TextInput />
          <TextArea />
          <Button variant="outlined">
            Submit
          </Button>
        </form>
      </div>
    );
}
