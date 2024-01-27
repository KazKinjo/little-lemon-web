import { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, submitForm, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    validateForm();
  };

  const handleTime = (e) => {
    setTime(e.target.value);
    validateForm();
  };

  const handleGuests = (e) => {
    setGuests(e.target.value);
    validateForm();
  };

  const handleOccasion = (e) => {
    setOccasion(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    if (date && time && guests && occasion) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    validateForm();
  });

  return (
    <form onSubmit={handleSubmit} className='flex flex-col mx-14 mb-20'>
      <div className='gap-10 md:flex md:items-center md:justify-between'>
        <div className='text-highlight-black font-semibold text-xl mb-6 max-w-96 md:w-1/2'>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            required
            value={date}
            onChange={handleDate}
            className='w-full mt-2 p-2 border-highlight-black border-2 border-solid rounded-2xl focus:outline-none'
          />
        </div>
        <div className='text-highlight-black font-semibold text-xl mb-6 max-w-96 md:w-1/2'>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            required
            value={time}
            onChange={handleTime}
            className='w-full mt-2 p-2 border-highlight-black border-2 border-solid rounded-2xl :focus:outline-none'
          >
            {availableTimes
              ? availableTimes.map((time) => (<option key={time}>{time}</option>))
              : null
            };
          </select>
        </div>
      </div>
      <div className='gap-10 md:flex md:items-center md:justify-between'>
        <div className='text-highlight-black text-lg font-semibold mb-6 max-w-96 md:w-1/2'>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            placeholder="1"
            min="1"
            max="10"
            required
            value={guests}
            onChange={handleGuests}
            className='w-full mt-2 p-2 border-highlight-black border-2 border-solid rounded-2xl :focus:outline-none'
          />
        </div>
        <div className='text-highlight-black text-lg font-semibold mb-6 max-w-96 md:w-1/2 md:max-w-96'>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            required
            value={occasion}
            onChange={handleOccasion}
            className='w-full mt-2 p-2 border-highlight-black border-2 border-solid rounded-2xl :focus:outline-none'
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
      </div>
      <button
        type='submit'
        disabled={!isValid}
        className="bg-primary-yellow text-highlight-black text-2xl font-Intel font-semibold self-center h-16 w-60 mt-10 border-0 rounded-2xl hover:cursor-pointer hover:transition-all hover:text-highlight-gray"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;