import ServiceCard from "./ServiceCard";
import code from "../images/code-slash.svg";
import market from "../images/share-social.svg";
import apps from "../images/logo-google-playstore.svg";
import color from "../images/color.svg";
import search from "../images/search.svg";
import eye from "../images/eye.svg";

const Services = () => {
  const servData = [
    {
      ico: code,
      heading: "Web Design & Development",
      content:
        "Web development services help create all types of web-based software and ensure a great experience for web users. At Bimaper, we professionally design, redesign, and continuously support customer-facing and enterprise web apps to achieve high conversion and adoption rates.",
    },
    {
      ico: market,
      heading: "Digital Marketing",
      content:
        "Our expert will first understand your business processes and requirements and will come up with a solution and perform SEO and SMO strategies that will not only increase web traffic to your website but also convert leads into sales within a very short amount of time. We work across different industries, ranging from small scale to huge scale enterprises. Our main focus has always been to connect with businesses that are struggling with digital marketing and then provide them with exceptional value to help them with digital marketing services to promote their businesses online in the market and make them a happy client.",
    },
    {
      ico: apps,
      heading: "App Development",
      content:
        "Mobile app development services are aimed at building iOS and Android applications that effectively complement or substitute web solutions. Having delivered 150+ mobile app development projects so far, Bimaper ensures app success by delivering striking UI, secure app code, and resilient back ends.",
    },
    {
      ico: color,
      heading: "Graphic Design",
      content:
        "Bimaper is a professional graphic design services provider in the creative digital services agency market. Our creative graphic design services include outstanding and attention-grabbing visuals for brochures, banners, flyers, business cards, e-books, and much more.",
    },
    {
      ico: search,
      heading: "SEO & SMO",
      content:
        "Our team plans a structured format for the business by rightly analyzing the industry's competitors, as we believe in creating a difference for your business in the marketplace. Thus, by assessing the gain proportion and the highlighted market distribution of the competitor, our team strategically designs the SMO services strategy with structured, actionable steps and desired goals, as our agenda is to provide results with our dedicated efforts.",
    },
    {
      ico: eye,
      heading: "UX UI Design",
      content:
        "From basic event apps to scalable enterprise software for Fortune 500 companies, our long-standing design team can help any idea come to life with the latest tools and tech. Our well-established process and standardized approach to design will ensure the final product looks and works as you require.",
    },
  ];
  return (
    <div className="xs:px-10 sm:px-10 md:px-20 lg:px-40 xl:px-40 2xl:px-40 py-20">
      <h2 className="font-bold xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl mb-14 tracking-tighter">
        Our <span className="text-sky-500">Services</span> include
      </h2>
      <div className="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-5">
        {servData.map((item) => (
          <ServiceCard key={item.heading} data={item}></ServiceCard>
        ))}
      </div>
    </div>
  );
};
export default Services;
