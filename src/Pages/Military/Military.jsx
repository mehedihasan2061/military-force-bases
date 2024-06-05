// import { IoCheckmarkCircle } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";


const Military = ( ) => {
    const militaries = useLoaderData()
    console.log(militaries);
    const { id } = useParams()
    const idx=parseInt(id)
    console.log(typeof id);
    const items = militaries.find(military => military.id === idx)
    const { image, title, segment_name, description, price,  area, location, facilities } =items
   
    return (
      <div>
        <div className="flex flex-col max-w-lg mx-auto p-6 my-16 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <img
              alt=""
              src={image}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                {segment_name}
              </a>
              <span className="text-xs dark:text-gray-600">{location}</span>
            </div>
          </div>
          <div>
            <img
              src={image}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
            />
            <h2 className="mb-1 text-xl font-semibold">{title}</h2>
            <p className="text-sm dark:text-gray-600">{description}</p>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            <div className="font-bold ">
              {facilities.map((facility,index) => (
                <li key={index}>{facility}</li>
              ))}
            </div>
            <div className="flex space-x-2 text-sm dark:text-gray-600">
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
                <p className="font-bold">
                  Price: <span> {price}</span>
                </p>
              </button>
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5"
              >
                <p className="font-bold">
                  Area: <span> {area}</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Military;