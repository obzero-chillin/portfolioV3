import React, { useRef, useState } from 'react';
import './css/contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_lilpzwm',
      'template_5ni61m1',
      form.current,
      'ebhmzcEP9blM9bQre'
    ).then(
      (result) => {
        console.log(result.text);
        
        e.target.reset();
      },
      (error) => {
        alert("Oops! Something went wrong");
      }
    ).finally(() => {
      setIsSending(false);
      const status = document.querySelector('#sendStatus');
      if (status) {
        status.classList.toggle('sent');
        setTimeout(() => status.classList.toggle('sent'), 5000);
      }
    });
  }

  return (
    <div id='contact'>
      <h1 className='topic'>Contact</h1>
      <h2>Lets talk</h2>
      <div id='sendStatus'><em>Email sent successfully</em></div>
      <div id='contactFormContainer'>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Your Name</label><br />
          <input name="user_name" className='inputField' required /><br />
          <label htmlFor="user_email">Your Email</label><br />
          <input name="user_email" className='inputField' type="email" required /><br />
          <label htmlFor="message">Message</label><br />
          <textarea name='message' className='inputField' required></textarea><br />
          <button type='submit' disabled={isSending} id='submit'>
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
