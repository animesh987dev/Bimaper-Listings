const Cta = () => {
  return (
    <div className="xs:px-5 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-40 pb-20">
      <div className="form-base">
        <form action="" className="relative">
          <h2 className="font-bold text-sky-900 xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-4 tracking-tighter">
            List your <span className="text-sky-500">Brand</span> now !
          </h2>
          <p className="text-lg text-sky-900 mb-16">
            List your brand with us and expand your reach.
          </p>
          <p className="text-md text-sky-900 mb-2">Brand information</p>
          <div className="form-grid mb-10 border-4 border-sky-900/20 rounded-md p-5">
            <label htmlFor="" className="form-label">
              Name &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Email &nbsp;
              <input type="email" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Phone &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Company Name &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              GST No. &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              State &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              City &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Pincode &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Pan No. &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label">
              Aadhar No. &nbsp;
              <input type="text" className="form-field" />
            </label>
            <label htmlFor="" className="form-label flex flex-wrap">
              Address &nbsp;
              <textarea
                name=""
                id=""
                cols="15"
                rows="2"
                className="rounded-md"
              ></textarea>
            </label>
          </div>
          <div className="mb-10">
            <p className="text-md text-sky-900 mb-2">Account details</p>
            <div className="flex flex-wrap gap-x-16 gap-y-5 border-4 border-sky-900/20 rounded-md p-5">
              <label htmlFor="" className="form-label">
                Account No. &nbsp;
                <input type="text" className="form-field" />
              </label>
              <label htmlFor="" className="form-label">
                Account Holder Name &nbsp;
                <input type="text" className="form-field" />
              </label>
              <label htmlFor="" className="form-label">
                IFSC Code &nbsp;
                <input type="text" className="form-field" />
              </label>
            </div>
          </div>
          <div className="flex xs:gap-5 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10">
            <input
              type="submit"
              value="Submit"
              className="bg-sky-700 hover:bg-sky-500 duration-500 xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg cursor-pointer px-5 py-2 text-slate-100 hover:text-slate-900 rounded-md"
            />
            <input
              type="reset"
              value="Clear"
              className="bg-slate-100 hover:bg-slate-600 xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg cursor-pointer px-5 py-2 text-sky-900 hover:text-slate-100 duration-500 rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Cta;
