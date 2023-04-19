import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Portfolio from './src/pages/Portfolio';
import Contact from './src/pages/Contact';
import Navbar from './src/components/Nav';
import Footer from './src/components/Footer';
import Resume from './src/pages/Resume';
import PorfolioProjectDisplay from './src/pages/PortfolioProjectDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Portfolios/:id" element={<PorfolioProjectDisplay/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;