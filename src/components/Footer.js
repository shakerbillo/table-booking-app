import React from 'react';
import logo from '../assets/images/footer-logo.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer">
			<Link to="/">
				<img src={logo} alt="footer logo" className="footer-logo" />
				</Link>
			<div >

				<Link to="/" className="footer-links">
					Home
				</Link>

				<Link to="/about" className="footer-links">
					About
				</Link>

				<Link to="/menu" className="footer-links">
					Menu
				</Link>

				<Link to="/reservation" className="footer-links">
					Reservation
				</Link>

				<Link to="/order" className="footer-links">Order</Link>
				<Link to="/login" className="footer-links" >Login</Link>
			</div>
			<div className="contact-info">
				<p>123 Ceska Street, City, Czech Republic</p>
				<p>Phone: 123-456-7890</p>
				<p>Email: info@example.com</p>
			</div>
			<div className="social-media">
				<a href="/">Facebook</a>

				<a href="/">Instagram</a>

				<a href="/contact">Twitter</a>
			</div>
		</footer>
	);
};

export default Footer;
