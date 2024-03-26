import { specialmenu } from "../../utils/data";
import { MdDeliveryDining } from "react-icons/md";

const MenuList = () => {
  return (
    <article className="flex flex-col items-center md:flex-row md:gap-5 md:justify-between">
      {
        specialmenu.map(({ id, name, price, description, src, alt }) => {
          return (
            <article
              key={id}
              className="bg-white mt-12 w-4/5 border border-solid border-highlight-black rounded-2xl overflow-hidden shadow-md sm:w-3/5 md:mt-0 md:w-1/3 md:min-h-96"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-52 object-cover object-center md:h-40"
              />
              <div className="text-highlight-black font-Karla p-8 md:p-3">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold md:text-base">
                    {name}
                  </span>
                  <span className="text-sm font-bold">
                    ${price}
                  </span>
                </div>
                <div>
                  <p className="text-base font-normal">
                    {description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <div className="relative flex items-center justify-center mt-6 bg-highlight-black h-8 w-28 shadow-lg rounded-lg">
                    <span className="text-highlight-gray text-xs font-Intel font-semibold mr-4">
                      Delivery
                    </span>
                    <span>
                      <MdDeliveryDining className="text-highlight-gray text-xl" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          )
        })
      }
    </article>
  );
};

export default MenuList;