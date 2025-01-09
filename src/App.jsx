import './App.css';
import "antd/dist/reset.css";
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';
import TopDestinations from './Components/TopDestinations';

function App() {
  return (
    <div>
    <HeroSection />
    <ServicesSection />
    <TopDestinations />
    </div>
  );
}

export default App;