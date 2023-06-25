import { render, screen } from '@testing-library/react';
import BookingForm from './components/Pages/Booking/BookingForm';

test('Renders the BookingForm label', () => {
  // Mock the availableTimes prop
  const availableTimes = ['17:00', '18:00', '19:00'];

  render(<BookingForm availableTimes={availableTimes} />);

  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});


