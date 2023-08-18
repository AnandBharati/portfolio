import React, { useState } from 'react'
import './ContactMe.css'

function ContactMe() {
    const [message, setMessage] = useState('');
    const [sender, setSender] = useState('');

    const postMessage = () => {

    }

    return (
        <section id='contactme' className='contactme'>

            <h1>Contact Me</h1>
            <input type="text"
                name="sender"
                placeholder='enter your email'
                value={sender}
                onChange={(e) => setSender(e.target.value)} />
            <textarea
                name="message"
                placeholder='enter your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="button"
                onClick={postMessage}
                > Send </button>

        </section>
    )
}

export default ContactMe