import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Nav';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import PorfolioProjectDisplay from './pages/PortfolioProjectDisplay';
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