import search from "../images/search.svg";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";
import p8 from "../images/p8.jpg";
import p9 from "../images/p9.jpg";
import p10 from "../images/p10.jpg";

const Listings = () => {
  const listData = [
    {
      curR: 1,
      lastR: 1,
      img: p1,
      name: "Lion Shield",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 2,
      lastR: 3,
      img: p2,
      name: "Wilman",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 3,
      lastR: 2,
      img: p3,
      name: "Jan Suvidha",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 4,
      lastR: 6,
      img: p4,
      name: "TSE",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 5,
      lastR: 5,
      img: p5,
      name: "Wilman Group",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 6,
      lastR: 6,
      img: p6,
      name: "Wilman Infra",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 7,
      lastR: 8,
      img: p7,
      name: "Proz Force",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 8,
      lastR: 9,
      img: p8,
      name: "Clay Mansion",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 9,
      lastR: 7,
      img: p9,
      name: "FinFy",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 10,
      lastR: 10,
      img: p10,
      name: "Mayuri",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
  ];

  const listDataSpon = [
    {
      curR: 1,
      lastR: 1,
      img: p1,
      name: "Lion Shield",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 2,
      lastR: 3,
      img: p2,
      name: "Wilman",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
    {
      curR: 3,
      lastR: 2,
      img: p3,
      name: "Jan Suvidha",
      curEval: "INR 672,862M",
      lastEval: "INR 638,826M",
      curGrad: "AA+",
      lastGrad: "AA",
    },
  ];

  return (
    <div className="xs:px-10 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-40 py-20">
      <h2 className="font-bold xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-14 tracking-tighter">
        <span className="text-sky-500">Brand</span> listings
      </h2>
      <div className="flex items-center gap-2 mb-10">
        <input
          className="border-4 text-xl pr-10 border-sky-300 rounded-md p-3 w-full"
          type="text"
          placeholder="Search a Brand"
        />
        <button className="bg-sky-500 rounded-md">
          <img src={search} className="h-14 w-14 p-2" alt="" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="">
          <p className="mb-5">Listings</p>
          <table className="w-full text-center">
            <tr className="">
              <th className="text-slate-100 p-2">2023</th>
              <th className="text-slate-100 p-2">2022</th>
              <th className="text-slate-100 p-2">Logo</th>
              <th className="text-slate-100 p-2">Name</th>
              <th className="text-slate-100 p-2">2023</th>
              <th className="text-slate-100 p-2">2022</th>
              <th className="text-slate-100 p-2">2023</th>
              <th className="text-slate-100 p-2">2022</th>
            </tr>
            {listDataSpon.map((item) => (
              <tr className="spo">
                <td colSpan={2} className="">
                  Sponsored
                </td>
                <td className="">
                  <center>
                    <img className="customer-logo" src={item.img} alt="" />
                  </center>
                </td>
                <td className="">{item.name}</td>
                <td className="">{item.curEval}</td>
                <td className="">{item.lastEval}</td>
                <td className="">{item.curGrad}</td>
                <td className="">{item.lastGrad}</td>
              </tr>
            ))}
            {listData.map((item) => (
              <tr className="">
                <td className="">{item.curR}</td>
                <td className="">{item.lastR}</td>
                <td className="">
                  <center>
                    <img className="customer-logo" src={item.img} alt="" />
                  </center>
                </td>
                <td className="">{item.name}</td>
                <td className="">{item.curEval}</td>
                <td className="">{item.lastEval}</td>
                <td className="">{item.curGrad}</td>
                <td className="">{item.lastGrad}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="flex gap-10 mt-10">
        <button className="bg-slate-100 hover:bg-slate-600 xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg cursor-pointer px-5 py-2 text-sky-900 hover:text-slate-100 duration-500 rounded-md">
          &larr; Prev
        </button>
        <button className="bg-sky-700 hover:bg-sky-500 duration-500 xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg cursor-pointer px-5 py-2 text-slate-100 hover:text-slate-900 rounded-md">
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Listings;
