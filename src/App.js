import About from './Pages/About';
import Contact from './Pages/ContactUs';
import Community from './Pages/Community';
import Home from './Pages/Home';
import HowitWorks from './Pages/How-it-works';
import InfluencerBenefit from './Pages/InfluentialBenefit';
import OurServices from './Pages/OurServices';
import One from './Pages/signup/One';
import Two from './Pages/signup/Two';
import Three from './Pages/signup/Three';
import Four from './Pages/signup/Four';
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
        <Route path='about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='community' element={<Community />} />
        <Route path='howitworks' element={<HowitWorks />} />
        <Route path='influencerbenefit' element={<InfluencerBenefit />} />
        <Route path='ourservices' element={<OurServices />} />
        <Route path='one' element={<One />} />
        <Route path='two' element={<Two />} />
        <Route path='three' element={<Three />} />
        <Route path='four' element={<Four />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
