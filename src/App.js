import './App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title has-text-centered">Bulma</h1>
        <p className="subtitle has-text-centered">
          Modern CSS framework based on{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
            Flexbox
          </a>
        </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>
        <Buttons/>
        
      </div>
    </div>
  );
}

export default App;
