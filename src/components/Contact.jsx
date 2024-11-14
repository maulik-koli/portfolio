import React from 'react'
import theme_pattern from '../assets/theme-pattern.svg'
import Mail from '../assets/mail-icon.svg'
import Location from '../assets/location-icon.svg'
import Call from '../assets/call-icon.svg'

const emailKey = import.meta.env.VITE_EMAIL_KEY

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", emailKey);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
    };

    return (
        <div  id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Whether it's a project or a conversation, I’m always happy to connect! Don’t hesitate to get in touch, I’m open to collaboration and discussion.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={Mail} alt="mail" /> maulikkoli1021@gmail.com 
                        </div>
                        <div className="contact-detail">
                            <img src={Call} alt="call" /> +91 7433080948
                        </div>
                        <div className="contact-detail">
                            <img src={Location} alt="location" /> Rajkot, Gujarat, India  
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type='text' placeholder='Enter your email' name='name' />
                    <label htmlFor=''>Write your message here</label>
                    <textarea name='message' rows="5" placeholder='Enter your message' ></textarea>
                    <button className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
