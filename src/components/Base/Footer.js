import { Link } from "react-router-dom";
import AppleStoreBadge from "../../assets/Download_on_the_App_Store_Badge.svg.png";
import GooglePlayBadge from "../../assets/Google_Play_Store_badge_EN.svg.png";

const Footer = () => {
  return (
    <footer className="bg-highlight-gray p-14">
      <div className="text-highlight-black font-Karla text-center md:flex md:justify-between md:items-start md:text-left md:pb-14">
        <ul className="mb-10 md:mr-10 md:mb-0">
          <h2 className="font-bold mb-4">
            Our site
          </h2>
          <li className="pb-2">
            <Link to="/" className="hover:cursor-pointer hover:font-semibold">
              Home
            </Link>
          </li>
          <li className="pb-2">
            <Link to="" className="hover:cursor-pointer hover:font-semibold">
              About
            </Link>
          </li>
          <li className="pb-2">
            <Link to="" className="hover:cursor-pointer hover:font-semibold">
              Menu
            </Link>
          </li>
          <li className="pb-2">
            <Link to="/booking" className="hover:cursor-pointer hover:font-semibold">
              Reservations
            </Link>
          </li>
          <li className="pb-2">
            <Link to="" className="hover:cursor-pointer hover:font-semibold">
              Order Online
            </Link>
          </li>
        </ul>
        <div className="mb-10 md:mr-4 md:mb-0">
          <h2 className="font-bold mb-4">
            Contact Us
          </h2>
          <div className="pb-2">
            Address: Street, Central, Hong Kong
          </div>
          <div className="pb-2">
            Inquiries: +852 1234 5678
          </div>
          <div className="pb-2">
            Email: littlelemon@mail.com
          </div>
        </div>
        <div className="mb-10 md:mr-4 md:mb-0">
          <h2 className="font-bold mb-4">
            Opening Hours
          </h2>
          <div className="pb-2">
            Lunch: Monday to Sunday
          </div>
          <div className="pb-2">
            12:00PM - 3:00PM
          </div>
          <div className="pb-2">
            Dinner: Monday to Sunday
          </div>
          <div className="pb-2">
            6:30PM - 10:00PM
          </div>
        </div>
        <div className="flex flex-col items-center mb-10 md:mb-0">
          <h2 className="font-bold mb-4">
            Mobile App
          </h2>
          <Link to="">
            <img
              src={AppleStoreBadge}
              alt="Apple Store badge"
              className="h-10 mb-4"
            />
          </Link>
          <Link to="">
            <img
              src={GooglePlayBadge}
              alt="Google Play badge"
              className="h-10 mb-4"
            />
          </Link>
        </div>
      </div>
      <hr />
      <div className="pt-2 text-center">
        <p className="text-highlight-black text-xs font-Karla">
          All copyright are reserved by Little Lemon, 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;