import React, { useState } from 'react'
import './contact.scss'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_EMAIL_TEMPLATE, formRef.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
        setError(true);
      });
  }

  return (
    <div className="contactPage" id="contact">
      <h1 className="contactTitle sectionTitle">
        Contact Me
      </h1>
      <div className="contactContainer">
        <form ref={formRef} onSubmit={handleSubmit} className="contactForm">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="name"
            name="user_name"
            disabled={done}
            required
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            disabled={done}
            name="user_email"
            required
          />
          <input
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Subject"
            type="subject"
            disabled={done}
            name="user_subject"
            required
          />
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
            type="message"
            disabled={done}
            name="user_message"
            required
          />
          <button type="submit">Send</button>
          {done && <h3 className="alert">Message has been sent! Thank you {name}, I'll get back to you ASAP!</h3>}
          {error && <h3 className="alert">Something went wrong, please try again later.</h3>}
          <div className=""></div>
        </form>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Contact
