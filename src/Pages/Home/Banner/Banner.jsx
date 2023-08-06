import bannerImage from '../../../assets/images/banner.jpg';
const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your one place for mental health issues</h1>
          <p className="py-6">
            We provide mental health services in the comfort of your home through our online platform.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
