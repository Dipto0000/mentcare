import Services from "../Services/Services";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mx-5">
            <Banner/>
            <Services/>
        </div>
    );
};

export default Home;