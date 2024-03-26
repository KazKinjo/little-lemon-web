import Main from "./Main";
import little_lemon_booking from '../../assets/restaurant.jpg';

const BookingPage = () => {
  return (
    <main className='bg-white h-full'>
      <img
        src={little_lemon_booking}
        alt='Little Lemon'
        className='w-full object-cover object-center h-96'
      />
      <div className='m-14 text-center'>
        <h1 className='text-highlight-black text-3xl font-bold font-Markazi'>
          Booking Table
        </h1>
        <Main />
      </div>
    </main>
  );
};

export default BookingPage;