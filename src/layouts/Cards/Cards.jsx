import { Link } from "react-router-dom";

const Cards = ({ military }) => {
    const { id,image, title, segment_name, description, price, status, area, location, facilities } = military;
    // console.log(military);
    return (
      <div className="my-10 " data-aos="fade-up" data-aos-duration="2000">
        <div className="card  bg-base-100 shadow-xl ">
          <figure>
            <img className=" " src={image} alt="Shoes" />
          </figure>
          <div className="p-3">
            <h1 className="text-xl font-bold">{segment_name}</h1>
            <h2 className="">{title}</h2>
            <p>{description}</p>
            <p>{status}</p>
            <div className="card-actions justify-end">
              <Link to={`military/${id}`}>
                {" "}
                <button className="btn btn-primary">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cards;