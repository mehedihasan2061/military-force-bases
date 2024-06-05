
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import slider1 from "../../../src/assets/9.jpg"
import slider4 from "../../../src/assets/64c5573edbf9e1001d096b68.jpg"
import slider3 from "../../../src/assets/240526-F-HX125-9060.jpg"
import slider2 from "../../../src/assets/army_0.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <Swiper
          className="relative rounded-xl"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img className="h-[500px] w-full" src={slider1} alt="" />
            <div className="absolute top-16 md:top-24 text-white md:w-2/3 left-8 md:left-20">
              <h1 className="md:text-2xl font-semibold md:my-6">
                To safeguard the national borders and ensure the sovereignty and
                territorial integrity of the nation..To be a highly trained,
                technologically advanced force capable of responding swiftly and
                effectively to any threat to national security.
              </h1>
              <Link to="/achieve">
                {" "}
                <button
                  className="btn bg-green-600 border-0 text-white"
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="2000"
                >
                  View Details
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[500px] w-full" src={slider2} alt="" />
            <div className="absolute top-24 text-white w-2/3 left-20">
              <h1 className="text-2xl font-semibold my-6">
                To safeguard the national borders and ensure the sovereignty and
                territorial integrity of the nation..To be a highly trained,
                technologically advanced force capable of responding swiftly and
                effectively to any threat to national security.
              </h1>
              <button className="btn bg-green-600 text-white">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[500px] w-full" src={slider3} alt="" />
            <div className="absolute top-24 text-white w-2/3 left-20">
              <h1 className="text-2xl font-semibold my-6">
                To safeguard the national borders and ensure the sovereignty and
                territorial integrity of the nation..To be a highly trained,
                technologically advanced force capable of responding swiftly and
                effectively to any threat to national security.
              </h1>
              <button className="btn bg-green-600 text-white">
                View Details
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[500px] w-full" src={slider4} alt="" />
            <div className="absolute top-24 text-white w-2/3 left-20">
              <h1 className="text-2xl font-semibold my-6">
                To safeguard the national borders and ensure the sovereignty and
                territorial integrity of the nation..To be a highly trained,
                technologically advanced force capable of responding swiftly and
                effectively to any threat to national security.
              </h1>
              <button className="btn bg-green-600 text-white">
                View Details
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;