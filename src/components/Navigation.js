import React from 'react';
import logo from '../assets/images/Logo.svg';
import './Navigation.css';
import { Link } from 'react-router-dom';


const Navigation = () => {
	return (
		<div className='"navigation"'>
			<nav className="nav">
				<Link to="/">
					<img src={logo} alt="logo" className="logo" />
				</Link>

				<Link to="/" className="nav-links">
					Home
				</Link>

				<Link to="/about" className="nav-links">
					About
				</Link>

				<Link to="/menu" className="nav-links">
					Menu
				</Link>

				<Link to="/reservation" className="nav-links">
					Reservation
				</Link>

				<Link to="/order" className="nav-links">
					Order
				</Link>
				<Link to="/login" className="nav-links">
					Login
				</Link>
			</nav>

			
		</div>
	);
};

export default Navigation;
