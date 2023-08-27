import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Pizza from './components/Pizza';
import Chinese from './components/Chinese';
import Dessert from './components/Dessert';
import SouthIndian from './components/SouthIndian';
import Punjabi from './components/Punjabi';

function App() {

  return (
    <>
    <NavBar />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contactUs" element={<ContactUs />} />
       <Route path="/pizza" element={<Pizza />} />
       <Route path="/chinese" element={<Chinese />} />
       <Route path="/dessert" element={<Dessert />} />
       <Route path="/southIndian" element={<SouthIndian/>} />
       <Route path="/punjabi" element={<Punjabi />} />
    </Routes>
    <Footer />
 </>
  );
}

export default App;
