import "./FormStyle.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';


const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_f15g4ej', 
        'template_i3x2asg',
         form.current, 'KVQgGefjJ1CN_hWUQ')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent")
          toast("Message Sent")
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name"></input>

            <label>Email</label>
            <input type="email" name="user_email"></input>

            <label>Country</label>
            <input type="text" name="user_country"></input>

            <label>Subject</label>
            <input type="text" name="user_subject"></input>

            <label>Message</label>
            <textarea rows="6"  placeholder="Type you message here" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form