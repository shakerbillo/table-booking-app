import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
	const [availableTimes] = useState([
		'17:00',
		'18:00',
		'19:00',
		'20:00',
		'21:00',
		'22:00',
		'23:00',
		'24:00',
	]);
	const [formInput, setFormInput] = useState({
		date: '',
		time: availableTimes[0],
		guests: '1',
		occasion: 'Birthday',
	});

	const handleDateChange = (event) => {
		setFormInput({ ...formInput, date: event.target.value });
	};
	const handleTimeChange = (event) => {
		setFormInput({ ...formInput, time: event.target.value });
	};
	const handleGuestsChange = (event) => {
		setFormInput({ ...formInput, guests: event.target.value });
	};
	const handleOccasionChange = (event) => {
		setFormInput({ ...formInput, occasion: event.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
			>
				<label htmlFor="res-date">Choose date</label>
				<input
					type="date"
					id="res-date"
					value={formInput.date}
					onChange={handleDateChange}
				/>
				<label htmlFor="res-time">Choose time</label>
				<select
					id="res-time "
					value={formInput.time}
					onChange={handleTimeChange}
				>
					{availableTimes.map((time) => (
						<option key={time}>{time}</option>
					))}
				</select>
				<label htmlFor="guests">Number of guests</label>
				<input
					type="number"
					placeholder="1"
					min="1"
					max="10"
					id="guests"
					value={formInput.guests}
					onChange={handleGuestsChange}
				/>
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					value={formInput.occasion}
					onChange={handleOccasionChange}
				>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				<input type="submit" value="Make Your reservation" />
			</form>
		</div>
	);
};

export default BookingForm;
