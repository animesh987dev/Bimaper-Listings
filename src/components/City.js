const City = () => {
  return (
    <div className="xs:px-10 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-40 py-20">
      <h2 className="font-bold xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-14 tracking-tighter">
        <span className="text-sky-500">City</span> listings
      </h2>
      <div className="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-5"></div>
    </div>
  );
};

export default City;
