import './App.css';
import "antd/dist/reset.css";
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';
import TopDestinations from './Components/TopDestinations';

function App() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <TopDestinations />
    </div>
  );
}

export default App;