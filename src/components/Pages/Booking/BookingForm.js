import React, { useState } from 'react';
import './BookingForm.css';
import { submitAPI } from '../../../bookingAPI';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes, updateTimes }) => {
	const [formInput, setFormInput] = useState({
		name: '',
		email: '',
		number: '',
		date: '',
		time: availableTimes[0],
		guests: '1',
		occasion: 'Birthday',
		comments: '',
	});
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleNameChange = (event) => {
		setFormInput({ ...formInput, name: event.target.value });
	};

	const handleEmailChange = (event) => {
		setFormInput({ ...formInput, email: event.target.value });
	};

	const handleNumberChange = (event) => {
		setFormInput({ ...formInput, number: event.target.value });
	};

	const handleCommentsChange = (event) => {
		setFormInput({ ...formInput, comments: event.target.value });
	};

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
	const validateForm = () => {
		let hasError = false;

		if (!formInput.name) {
			setError('Please enter your name.');
			hasError = true;
		}

		if (!formInput.email) {
			setError('Please enter your email.');
			hasError = true;
		}

		if (!formInput.number) {
			setError('Please enter your number.');
			hasError = true;
		}

		if (!formInput.date) {
			setError('Please select a date.');
			hasError = true;
		}

		if (parseInt(formInput.guests) <= 0) {
			setError('Number of guests must be greater than 0.');
			hasError = true;
		}

		if (!hasError) {
			setError(''); // Reset error state if there are no validation errors
		}

		return !hasError; // Return true if there are no validation errors
	};

	const submitForm = (event) => {
		event.preventDefault(); // Prevent form submission and page reload
		const isFormValid = validateForm();

		if (isFormValid) {
			const isSuccess = submitAPI(formInput); // Assuming submitAPI returns true on success
			if (isSuccess) {
				// Navigate to the booking confirmation page
				navigate('/confirmation');
			} else {
				setError('Submission failed. Please try again.'); // Display error message for submission failure
			}
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={submitForm}>
				<div className="form-field">
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						id="name"
						value={formInput.name}
						onChange={handleNameChange}
						aria-label="Full Name"
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						id="email"
						value={formInput.email}
						onChange={handleEmailChange}
						aria-labelledby="email"
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="number">Phone Number</label>
					<input
						type="number"
						id="number"
						value={formInput.number}
						onChange={handleNumberChange}
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="res-date">Choose date</label>
					<input
						type="date"
						id="res-date"
						value={formInput.date}
						onChange={handleDateChange}
						required
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
						required
					/>
				</div>
				<div className="form-field">
					<label htmlFor="occasion">Occasion</label>
					<select
						id="occasion"
						value={formInput.occasion}
						onChange={handleOccasionChange}
						required
					>
						<option>Birthday</option>
						<option>Anniversary</option>
						<option>Engagement</option>
						<option>Party</option>
					</select>
				</div>

				<div className="form-field">
					<label htmlFor="comments">Comments</label>
					<textarea
						id="comments"
						rows={4}
						cols={50}
						placeholder="Additional Comments"
						value={formInput.comments}
						onChange={handleCommentsChange}
					></textarea>
				</div>
				{error && <p className="error-message">{error}</p>}
				<input className="booking-button" type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default BookingForm;
