import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = ({ data }) => {
  const { icon, title } = data;

  return (
    <div>
      
      <div className=" pt-16 card w-46 bg-base-16 shadow-xl">
        <div className="card-body">
          <FontAwesomeIcon icon={icon} className="text-6xl" />
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Service;
