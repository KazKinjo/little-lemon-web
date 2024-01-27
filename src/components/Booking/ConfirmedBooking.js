import { GiConfirmed } from "react-icons/gi";

const ConfirmedBooking = () => {
  return (
    <>
      <main className='flex flex-col bg-white h-full p-20 items-center justify-center'>
        <div className="text-primary-green text-5xl font-bold mb-8">
          <GiConfirmed />
        </div>
        <h1 className='text-highlight-black text-2xl text-center font-Markazi font-bold mb-8'>
          Your Reservation has been made successfully!
        </h1>
        <p className='text-highlight-black text-base text-center font-Markazi font-semibold'>
          you will get a confirmation via email
        </p>
      </main>
    </>
  )
}

export default ConfirmedBooking;