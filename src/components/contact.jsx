import React from 'react'
import './css/contact.css'

const Contact = () => {
  return (
    <div id='contact'>
        <h1 className='topic'>Contact</h1>
        <h2>Lets talk</h2>
        <div id='contactFormContainer'>
            <form>
                <label htmlFor="name">Your Name</label><br></br>
                <input name="name" className='inputField' /><br></br>
                <label htmlFor="email">Your Email</label><br></br>
                <input name="email" className='inputField'/><br></br>
                <label htmlFor="message">Message</label><br></br>
                <textarea name='message' className='inputField'></textarea><br></br>
                <button id="submit" type='submit'>Send</button>
            </form>

        </div>
    </div>
  )
}

export default Contact