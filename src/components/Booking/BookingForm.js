import { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, selectNumberOfGuests, selectOccasions, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const validateForm = () => {
    if (date && time && guest && occasion) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    validateForm();
  },);

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
            onChange={(e) => setDate(e.target.value)}
            className='w-full mt-2 p-2 border-highlight-black border-2 border-solid rounded-2xl focus:outline-none'
          />
        </div>
        <div className='text-highlight-black font-semibold text-xl mb-6 max-w-96 md:w-1/2'>
          <label htmlFor="time">Time</label>
          <select
            id="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className='w-full mt-2 p-2 border-highlight-black border-2 border-solid rounded-2xl focus:outline-none'
          >
            {availableTimes.map((time) => <option key={time}>{time}</option>)}
          </select>
        </div>
      </div>
      <div className='gap-10 md:flex md:items-center md:justify-between'>
        <div className='text-highlight-black text-lg font-semibold mb-6 max-w-96 md:w-1/2'>
          <label htmlFor="guest">Number of guests</label>
          <select
            id="guest"
            required
            value={guest}
            onChange={(e) => setGuests(e.target.value)}
            className='w-full mt-2 p-2 border-highlight-black border-2 border-solid rounded-2xl :focus:outline-none'
          >
            {selectNumberOfGuests.map((guest) => <option key={guest}>{guest}</option>)}
          </select>
        </div>
        <div className='text-highlight-black text-lg font-semibold mb-6 max-w-96 md:w-1/2 md:max-w-96'>
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            required
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className='w-full mt-2 p-2 border-highlight-black border-2 border-solid rounded-2xl :focus:outline-none'
          >
            {selectOccasions.map((occasion) => <option key={occasion}>{occasion}</option>)}
          </select>
        </div>
      </div>
      <button
        type='submit'
        disabled={!isValid}
        className="
        bg-primary-yellow text-highlight-black text-2xl font-Intel font-semibold self-center h-16 w-60 mt-10 border-0 rounded-2xl 
        hover:cursor-pointer hover:transition-all hover:text-highlight-gray 
        disabled:bg-highlight-gray disabled:hover:transition-none disabled:text-highlight-black disabled:text-opacity-30"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;