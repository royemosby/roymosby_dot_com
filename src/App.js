import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Contact from './components/Contact';
import Projects from './components/Projects'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="section">
        <div className="container">
          <Header/>
          <Hero/>
          <Info/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
