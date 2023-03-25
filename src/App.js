import "./App.css";

//Components
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import Testimonials from "./components/testimonials/Testimonials";
import Virtual from "./components/virtual/Virtual";
import Footer from "./components/footer/Footer";
import Map from "./components/map/Map";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
