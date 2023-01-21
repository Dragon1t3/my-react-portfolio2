import React from "react";
import "./contact.css";
import {TfiEmail} from 'react-icons/tfi'
import {FaTelegramPlane} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_phnfh2a', 'template_6r4hjq3', form.current, 'zJ98sGj_rV6FMTaux')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ronwyn09@gmail.com</h5>
            <a href="mailto:ronwyn09@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>Ronwyn</h5>
            <a href="https://t.me/Ronwyndm" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Ronwyn</h5>
            <a href="https://wa.me/27659904780" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
