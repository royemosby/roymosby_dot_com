import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Projects from './components/Projects'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="section">
        <div className="container">
          <Header/>
          <Hero/>
          <Info/>
          <Projects/>
          <Footer/>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
