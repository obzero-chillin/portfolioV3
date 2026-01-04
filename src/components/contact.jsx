import React from 'react'
import './css/contact.css'
import { useRef, useState } from 'react'

const Contact = () => {
   const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const {sent, isSent} = useRef(false);

   const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
    
    
        emailjs.sendForm(
            'service_lilpzwm',
            'template_5ni61m1',
            form.current,
            'ebhmzcEP9blM9bQre'
        ).then((result)=>{
            console.log(result.text);
            e.target.reset();
            
        },(error)=>{
            alert("Oops! Something went wrong");
            return;
        }).finally(()=>{
            setIsSending(false);
            document.querySelector('#sendStatus').classList.toggle('sent');
            setTimeout(() => {
                document.querySelector('#sendStatus').classList.toggle('sent');

                
            }, 5000);
        })
    }

  return (
    <div id='contact'>
        <h1 className='topic'>Contact</h1>
        <h2>Lets talk</h2>
        <div id='contactFormContainer'>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="user_name">Your Name</label><br></br>
                <input name="user_name" className='inputField' /><br></br>
                <label htmlFor="user_email">Your Email</label><br></br>
                <input name="user_email" className='inputField'/><br></br>
                <label htmlFor="user_message">Message</label><br></br>
                <textarea name='user_message' className='inputField'></textarea><br></br>
                <button id="submit" type='submit'>Send</button>
            </form>

        </div>
    </div>
  )
}

export default Contact