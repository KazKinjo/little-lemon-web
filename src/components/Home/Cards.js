import { testimonialsData } from "../../utils/data";

const Cards = () => {
  return (
    <article className="flex flex-col items-center mt-12 md:flex-row md:justify-between md:gap-5">
      {
        testimonialsData.map(({ id, name, comment, src, alt }) => {
          return (
            <article
              key={id}
              className="flex flex-col w-4/5 bg-highlight-gray p-4 mt-12 rounded-2xl shadow-md sm:w-3/5 md:mt-0"
            >
              <img
                src={src}
                alt={alt}
                className="h-32 w-32 rounded-full self-center"
              />
              <h4 className="text-highlight-black text-center font-Karla font-bold my-4">
                {name}
              </h4>
              <p className="text-highlight-black text-center font-Karla text-base">
                "{comment}"
              </p>
            </article>
          )
        })
      }
    </article>
  )
}

export default Cards;