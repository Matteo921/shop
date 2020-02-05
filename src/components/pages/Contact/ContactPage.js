import React from 'react';
import "./Contact.scss";


const ContactPage = () => (
 
      <div className="contact container">
        <div className="address">
          <h6>Poprzeczna 29</h6>
          <h6>Wrocław, Poland</h6>
          <h6>Mobile: +48 5464 456 789</h6>
          <h6>Fax: +48 345 677 19</h6>
          <h6>uglyclothes@gmail.com</h6>
        </div>
        <div className="info">
          <div className="form">
            <input className="name" type="text" placeholder="Name"></input>
            <input className="email" type="text" placeholder="Email"></input>
            <textarea className="text" type="text" placeholder="Your message" cols="40" rows="15"></textarea>
            <button className="button-contact">Send</button>
          </div>   
     
        </div>
      </div>
);
  

export default ContactPage;