import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

import Index from './pages/Index.jsx';
import Restaurang from './pages/Restaurang.jsx';
import Allservice from './pages/Allservice.jsx';
import OmOss from './pages/Om-oss.jsx';
import Bokning from './pages/Bokning.jsx';

import './styles/stilmall-Global.css';
import './styles/stilmall-Index.css';
import './styles/stilmall-Restaurang.css';
import './styles/stilmall-Allservice.css';
import './styles/stilmall-OmOss.css';
import './styles/stilmall-Bokning.css';

function App() {
  return (
    <div className="Main_app">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/Restaurang"element={<Restaurang />} />
          <Route path="/Allservice" element={<Allservice />} />
          <Route path="/Om-oss" element={<OmOss />} />
          <Route path="/Bokning" element={<Bokning />} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App
