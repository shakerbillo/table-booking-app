import React from 'react';
import { Link } from 'react-router-dom';
import toast from '../../../assets/images/restauranfood.jpg';
import './Hero.css';

const Hero = () => {
	return (
		<div className="hero-container">
			<div className="text-container">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					We are a family owned Mediterranean restaurant, focused on traditional
					recipes served with a modern twist.
				</p>
				<Link className="action-button" to="/reservation">Reserve a table</Link>
			</div>
      <div className="hero-img">
      <img src={toast} alt=""  />
      </div>
			
		</div>
	);
};

export default Hero;
