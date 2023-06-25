import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, updateTimes }) => {
	const [formInput, setFormInput] = useState({
		date: '',
		time: availableTimes[0],
		guests: '1',
		occasion: 'Birthday',
	});

	const [error, setError] = useState('');

	const handleDateChange = (event) => {
		const selectedDate = event.target.value;
		setFormInput({ ...formInput, date: selectedDate });
		updateTimes(selectedDate);
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

	// Perform form validation
	const handleError = () => {
		if (!formInput.date) {
			setError('Please select a date.');
			return;
		}

		if (parseInt(formInput.guests) <= 0) {
			setError('Number of guests must be greater than 0.');
			return;
		}

		// Reset error state if there are no validation errors
		setError('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		handleError();
	};

	return (
		<div className="form-container">
			<form
				onSubmit={handleSubmit}
				style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
			>
				<div className="form-field">
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						value={formInput.date}
						onChange={handleDateChange}
					/>
				</div>

				<div className="form-field">
					<label htmlFor="res-time">Choose time</label>
					<select
							id="res-time"
                            value={formInput.time}
                            onChange={handleTimeChange}
					>
						{availableTimes.map((time) => (
							<option key={time}>{time}</option>
						))}
					</select>
				</div>
				<div className="form-field">
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
				</div>
				<div className="form-field">
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						value={formInput.occasion}
						onChange={handleOccasionChange}
					>
						<option>Birthday</option>
						<option>Anniversary</option>
					</select>
				</div>
				{error && <p className="error-message">{error}</p>}
				<input
					className="submit-button"
					type="submit"
					value="Submit"
				/>
			</form>
		</div>
	);
};

export default BookingForm;
