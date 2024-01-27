import { Link } from "react-router-dom";
import image from "../../assets/restaurant_food.jpg";

const Hero = () => {
  return (
    <section className="bg-primary-green">
      <div className="flex flex-col p-14 justify-between sm:flex-row">
        <div className="flex flex-col items-center font-Intel sm:w-1/2 sm:items-start">
          <h1 className="text-primary-yellow text-5xl sm:text-4xl">
            Little Lemon
          </h1>
          <h2 className="text-highlight-gray text-4xl mt-4 sm:text-3xl">
            Chicago
          </h2>
          <p className="text-highlight-gray text-2xl text-center mt-8 mb-10 sm:text-xl sm:text-start sm:pr-8">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button type="button" className="bg-primary-yellow text-highlight-black text-2xl font-semibold h-16 w-60 border-0 rounded-2xl hover:cursor-pointer hover:transition-all hover:text-highlight-gray">
              Reserve Table
            </button>
          </Link>
        </div>
        <div className="hidden overflow-hidden rounded-2xl sm:block sm:w-1/2 sm:h-96 md:max-w-xs">
          <img src={image} alt="Little Lemon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;