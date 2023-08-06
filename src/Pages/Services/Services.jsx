import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: faSearch,
      title: "Search doctors",
    },
    {
      id: 2,
      icon: faSearch,
      title: "volunteers",
    },
    {
      id: 3,
      icon: faSearch,
      title: "volunteers",
    },
  ];

  return (
    <div className="pt-16">
      <h1 className="text-center text-4xl font-semibold mb-4 mt-4">Our services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service.id} data={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
