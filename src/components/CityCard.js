const CityCard = (props) => {
  return (
    <div className="h-36 w-60 overflow-hidden rounded-md relative shadow-md">
      <img
        src={props.info.img}
        className="bg-cover bg-center"
        alt={props.info.name}
      />
      <div className="overlay-card"></div>
      <h3 className="absolute bottom-2 left-2 text-2xl font-semibold text-slate-100">
        {props.info.name}
      </h3>
    </div>
  );
};
export default CityCard;
