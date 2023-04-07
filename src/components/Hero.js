const Hero = () => {
  return (
    <div className="hero-base">
      <div className="hero-base-two">
        <h1 className="xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold tracking-tighter">
          Brand listings by <span className="text-sky-500">Bimaper.</span>
        </h1>
        <p className="font-regular xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg mb-6">
          List your business with us and let your business be known to a wider
          audiance.
        </p>
        <button className="w-max bg-sky-500 hover:bg-sky-900 duration-500 text-slate-100 p-3 xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg rounded-md">
          List Your Business
        </button>
      </div>
    </div>
  );
};

export default Hero;
