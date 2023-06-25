import './BookingPage.css';
import BookingForm from './BookingForm';
import { useReducer } from 'react';
import { fetchAPI } from '../../../bookingAPI';

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
		const today = new Date();
		const availableTimes = fetchAPI(today);
		// console.log(availableTimes);
		return availableTimes;
	};
	const initialAvailableTimes = initializeTimes();

	const [availableTimes, dispatch] = useReducer(reducer, initialAvailableTimes);

	const updateTimes = (selectedDate) => {
		// Call the fetchAPI function to get the available times for the selected date
		const updatedTimes = fetchAPI(selectedDate);
		dispatch({ type: 'UPDATE_AVAILABLE_TIMES', payload: updatedTimes });
		// Handle any errors that occur during the API call
	};

	return (
		<div>
			<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
		</div>
	);
};

export default BookingPage;
