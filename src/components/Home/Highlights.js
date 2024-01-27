import { Link } from "react-router-dom";
import MenuList from "./MenuList";

const Highlights = () => {
  return (
    <main className="bg-highlight-gray p-14">
      <section className="flex flex-col items-center pb-12 md:flex-row md:justify-around">
        <h3 className="text-highlight-black text-3xl font-Markazi font-bold mb-8 md:mb-0">
          This Week Specials!
        </h3>
        <Link to="">
          <button type="button" className="bg-primary-yellow text-highlight-black text-2xl font-Intel font-semibold h-16 w-60 border-0 rounded-2xl hover:cursor-pointer hover:transition-all hover:text-highlight-gray">
            Order Online
          </button>
        </Link>
      </section>
      <MenuList />
    </main>
  );
};

export default Highlights;