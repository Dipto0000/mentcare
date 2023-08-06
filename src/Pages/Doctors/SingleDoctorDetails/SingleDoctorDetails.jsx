import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleDoctorDetails = () => {
  const [doctor, setDoctor] = useState(null);
  console.log(doctor);
  const { id } = useParams();
  console.log(id);
  
  useEffect(() => {
      const url = `http://127.0.0.1:5173/doctor-detail/${id}`;

      fetch(url)
      .then(res => res.json())
      .then(data => setDoctor(data));
  }, [id]);

  if (!doctor) return <p>Loading...</p>;

  return (
    <div>
      <h1>Doctor Detail</h1>
      <h2>{doctor.name}</h2>
      <p>Institute: {doctor.institute}</p>
    </div>
  );
}

export default SingleDoctorDetails;
