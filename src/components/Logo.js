import logo from "../images/logoBlack.png";

const Logo = () => {
  return (
    <div>
      <img
        className="absolute xs:h-7 sm:h-8 md:h-8 lg:h-8 xl:h-8 2xl:h-8 xs:top-4 sm:top-8 md:top-8 lg:top-8 xl:top-8 2xl:top-8 xs:left-4 sm:left-8 md:left-8 lg:left-8 xl:left-8 2xl:left-8"
        src={logo}
        alt="Company Logo"
      />
    </div>
  );
};
export default Logo;
