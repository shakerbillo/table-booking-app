import React from 'react';
import './BookingPage.css';
import BookingForm from './BookingForm';
import { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_AVAILABLE_TIMES':
			return action.payload;
		default:
			return state;
	}
};

const BookingPage = () => {
	const initializeTimes = () => {
		return [
			'17:00',
			'18:00',
			'19:00',
			'20:00',
			'21:00',
			'22:00',
			'23:00',
			'24:00',
		];
	};
	const initialAvailableTimes = initializeTimes();

	const [availableTimes, dispatch] = useReducer(reducer, initialAvailableTimes);

	const updateTimes = (selectedDate) => {
		const updatedTimes = [...initialAvailableTimes];

		// Dispatch the action to update the availableTimes state
		dispatch({ type: 'UPDATE_AVAILABLE_TIMES', payload: updatedTimes });
	};
	return (
		<div>
			<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
		</div>
	);
};

export default BookingPage;
