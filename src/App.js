import Logo from "./components/Logo";
import Hero from "./components/Hero";
import City from "./components/City";
import Footer from "./components/Footer";
import Listings from "./components/Listings";

function App() {
  return (
    <div className="relative">
      <Logo></Logo>
      <Hero></Hero>
      <City></City>
      <Listings></Listings>
      <Footer></Footer>
    </div>
  );
}

export default App;
