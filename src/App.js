import Logo from "./components/Logo";
import Hero from "./components/Hero";
import City from "./components/City";
import Footer from "./components/Footer";
import Listings from "./components/Listings";
import Cta from "./components/Cta";

function App() {
  return (
    <div className="relative overflow-hidden">
      <Logo></Logo>
      <Hero></Hero>
      <City></City>
      <Listings></Listings>
      <Cta></Cta>
      <Footer></Footer>
    </div>
  );
}

export default App;
