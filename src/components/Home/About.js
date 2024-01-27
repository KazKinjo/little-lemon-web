import image from "../../assets/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section className="text-highlight-black font-Intel md:flex md:py-14 md:pr-10">
      <img
        src={image}
        alt="Little Lemon"
        className="w-full h-64 object-cover object-bottom sm:h-72 md:h-80 md:w-2/3"
      />
      <div className="p-10 md:py-0 md:pr-0 md:w-1/3">
        <h3 className="text-3xl text-center font-bold">
          ABOUT US
        </h3>
        <hr className="mt-4" />
        <p className="text-base font-normal mt-8">
          Little Lemon is a charming neighborhood bistro that serves simple
          food and classic cocktails in a lively but casual environment.
          The restaurant deatures a locally-sourced menu with daily specials.
        </p>
      </div>
    </section>
  );
};

export default About;