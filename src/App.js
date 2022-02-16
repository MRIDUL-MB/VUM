import About from './Pages/views/about/About';
import Contact from './Pages/views/contact/ContactUs';
import Community from './Pages/views/commuity/Community';
import Home from './Pages/views/home/Home';
import HowitWorks from './Pages/views/how-it-works/How-it-works';
import InfluencerBenefit from './Pages/views/influential-benefits/InfluentialBenefit';
import OurServices from './Pages/views/our-sevices/OurServices';
import Footer from './Pages/Components/Footer';
import Navbar from './Pages/Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useEffect, UseEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='community' element={<Community />} />
        <Route path='howitworks' element={<HowitWorks />} />
        <Route path='influencerbenefit' element={<InfluencerBenefit />} />
        <Route path='ourservices' element={<OurServices />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
