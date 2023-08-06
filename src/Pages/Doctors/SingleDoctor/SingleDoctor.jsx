import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const SingleDoctor = ({ doctor }) => {
  // console.log(doctor);
  const { name, institute, _id } = doctor;
  // console.log(name, institute, _id);

  const navigate = useNavigate();

  const handleClick = (_id) => {
    // console.log(_id);
    navigate(`/doctor-detail/${_id}`);
    console.log(_id);
  }
  return (
    <div className="card w-80 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{institute}</p>
        <div className="card-actions justify-center">
          <button onClick={() => handleClick(_id)} className="btn">Full profile</button>
        </div>
      </div>
    </div>
  );
};

SingleDoctor.propTypes = {
  doctor: PropTypes.object.isRequired,
};

export default SingleDoctor;
