import { render, screen } from "@testing-library/react";
import BookingPage from './components/Booking/BookingPage';

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Booking Table");
  expect(headingElement).toBeInTheDocument();
})
