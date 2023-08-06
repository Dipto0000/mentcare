import { useEffect, useState } from "react";
import SingleDoctor from "./SingleDoctor/SingleDoctor";

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        fetch("doctors.json")
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
            setIsLoading(false);
          });

    }, []);

    if(isLoading){
        return <p>Loading...</p>
    }
    
    return (
        <div>
            <h1 className="text-xl">Doctors list</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-40">
            {
                doctors.map(doctor => <SingleDoctor key={doctor._id} doctor={doctor}></SingleDoctor>)
            }
            </div>
        </div>
    );
};

export default Doctors;