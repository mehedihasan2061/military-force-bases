
import PropTypes from 'prop-types';

const EquipmentDetails = ({ equipment }) => {
    const { img, title } = equipment;
    return (
      <div>
        <div
          className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 mb-20 dark:text-gray-900"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-md  dark:bg-gray-500"
          />

          <p className="dark:text-gray-800 my-4 font-bold">{title}</p>
        </div>
      </div>
    );
};

EquipmentDetails.propTypes = {
    equipment:PropTypes.object,
};

export default EquipmentDetails;