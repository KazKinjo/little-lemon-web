import Main from "./Main";
import little_lemon_booking from '../../assets/restaurant.jpg';

const BookingPage = () => {
  return (
    <main className='bg-white h-full'>
      <img
        src={little_lemon_booking}
        alt='Little Lemon'
        className='w-full object-cover object-center h-80' />
      <h1 className='text-highlight-black text-3xl font-bold font-Markazi m-14'>
        Booking Table
      </h1>
      <Main />
    </main>
  );
};

export default BookingPage;