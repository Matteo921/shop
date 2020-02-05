import React from 'react';
import './faqstyle.scss'


const FAQpage = () => (
  <div className="faq">
    <h1>FAQ</h1>	    
    <div className="faq-header">Home Clothes shop FAQ</div>
      <div className="faq-content">
        <p className="faq-question">1. My discount code is not working, what do I do?</p>
        <p className="faq-answer">We are sorry you are having trouble checking out, please note that some discount codes require users to create an account on the site and be logged in upon check out to utilize the discount code.  
        </p>
      </div>
      <div className="faq-content">
        <p className="faq-question">2. Where is Clothing Shop Online based?</p>
        <p className="faq-answer">Our office is located in sunny Hermosa Beach, California, just a few steps from the Pacific Ocean and the kind of people who say "gnarly" (really). 
        </p>
      </div>
      <div className="faq-content">
        <p className="faq-question">3. Where are your products shipped from?</p>
        <p className="faq-answer">We ship from 7 warehouses around the US. With so many shipping centers across the country, we provide some of the fastest, most affordable delivery options in the industry. 
        </p>
      </div>
      <div className="faq-content">
        <p className="faq-question">4.Can I expedite my shipping?</p>
        <p className="faq-answer">Yes! We offer the following expedited shipping options:

·         Ground Shipping - UPS

·         3 Day Select - UPS

·         2nd Day Air - UPS

·         Next Day Air Saver - UPS

·         Next Day Air - UPS

·         Next Day Air Early AM – UPS
        </p>
      </div>
  </div>
);
export default FAQpage;