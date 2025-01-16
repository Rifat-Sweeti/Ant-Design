import './App.css';
import "antd/dist/reset.css";
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';
import TopDestinations from './Components/TopDestinations';
import Travel from './Components/Travel';
import Testimonials from './Components/Testimonials';
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <TopDestinations />
    <Travel />
    <Testimonials />
    <Footer />
    </div>
  );
}

export default App;