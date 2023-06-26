import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/Pages/Booking/BookingForm';

test('HTML5 validation attributes are applied to form input fields', () => {
  render(<BookingForm />);

  const nameInput = screen.getByLabelText('Name');
  expect(nameInput).toHaveAttribute('required');

  const emailInput = screen.getByLabelText('Email');
  expect(emailInput).toHaveAttribute('required');
  expect(emailInput).toHaveAttribute('type', 'email');

});

test('validateForm returns true for valid form input', () => {
  render(<BookingForm />);

  const nameInput = screen.getByLabelText('Name');
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  const emailInput = screen.getByLabelText('Email');
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

  // Add similar fireEvent calls for other input fields

  const submitButton = screen.getByText('Submit');
  fireEvent.click(submitButton);

  // Assert that the form submission is successful
});

test('validateForm returns false for invalid form input', () => {
  render(<BookingForm />);

  // Test the form with invalid input values

  const submitButton = screen.getByText('Submit');
  fireEvent.click(submitButton);

  // Assert that the form submission fails and displays the appropriate error message
});
