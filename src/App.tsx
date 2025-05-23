// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContactPage from './Components/Contact';
import HomePage from './Components/Homepage';
import AboutPage from './Components/About';

function App() {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
      

      <Footer />
    </>
  );
}

export default App;
