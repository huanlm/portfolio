import React, { useState } from 'react'
import './contact.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contactPage">
      <h1 className="contactTitle">
        Contact
      </h1>
      <div className="contactContainer">
        <form className="contactForm">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="name"
            name="name"
            required
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
          <input
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Subject"
            type="subject"
            name="subject"
            required
          />
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
            type="message"
            name="message"
            required
          />
          <button type="submit">Submit</button>
        </form>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Contact
