import React from 'react';
import shaker from '../../../assets/images/shaker.jpeg';
import emma from '../../../assets/images/shaker.jpeg';
import emman from '../../../assets/images/shaker.jpeg';
import bill from '../../../assets/images/shaker.jpeg';
import './Testimonial.css';

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
      <div className='testimonial-heading'>
        <h1>Testimonials</h1>
      </div>

      <div className="rating">
        <div className="testimonial">
          <img src={emman} alt="Customer 1" />
          <span className="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <h3>Emma</h3>
          <p>"Excellent service!"</p>
        </div>

        <div className="testimonial">
          <img src={shaker} alt="Customer 2" />
          <span className="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <h3>Bill</h3>
          <p>"Highly recommended!"</p>
        </div>

        <div className="testimonial">
          <img src={bill} alt="Customer 3" />
          <span className="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <h3>"Shaker"</h3>
          <p>Will come back for sure.</p>
        </div>

        <div className="testimonial">
          <img src={emma} alt="Customer 4" />
          <span className="testimonial-rating">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          <h3>Manu</h3>
          <p>"Amazing product!"</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
