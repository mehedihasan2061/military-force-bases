import PropTypes from "prop-types";
// import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const AchieveCard = ({ achieve }) => {
  const { image, title, name, description, game_name, prize, time } = achieve;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Achieve - Bangladesh Defence Portal</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero  bg-gray-50 my-6 p-4 rounded-xl ">
        <div
          className="hero-content flex-col lg:flex-row "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="center-right"
        >
          <img src={image} className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="md:text-4xl my-3 font-bold">{game_name}</h1>
            <h1 className="md:text-2xl my-3 font-bold">{name}</h1>
            <h1 className="md:text-2xl my-3 font-bold">{title}</h1>
            <div className="flex gap-12">
              <p className="font-bold "> Prize: {prize}</p>
              <p className="font-bold ">Date: {time}</p>
            </div>
            <p className="py-2 ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

AchieveCard.propTypes = {
  achieve: PropTypes.object,
};

export default AchieveCard;
