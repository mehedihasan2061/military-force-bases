import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Cards = ({ military }) => {
    const { id,image, title, segment_name, description, area, location} = military;
    
    return (
      <div className="my-10 " data-aos="fade-up" data-aos-duration="2000">
        <div className="card flex flex-col  bg-base-100 shadow-xl ">
          <figure>
            <img className=" h-64" src={image} alt="Shoes" />
          </figure>
          <div className="p-3 h-960 flex-grow">
            <h1 className="text-xl my-2 font-bold">{segment_name}</h1>
            <h2 className="my-2">{title}</h2>
            <p className="my-2">{description}</p>
            <div className="">
              <p className="my-2 font-bold">Area: {area}</p>
              <p className="my-2 ">Location: {location}</p>
            </div>
            <div className="card-actions justify-end">
              <Link to={`military/${id}`}>
                {" "}
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

Cards.propTypes = {
  military:PropTypes.object
}

export default Cards;