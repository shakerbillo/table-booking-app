import React from 'react';

import './ConfirmedBooking.css';
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
	return (
		<div className="confirmed-booking">
			<h1>Booking Confirmed!</h1>
			<p>
				Your booking has been confirmed. Thank you for choosing our restaurant.
			</p>
			<Link to="/" className="submit-button" value="Submit" >Go to home</Link>
		</div>
	);
};

export default ConfirmedBooking;
