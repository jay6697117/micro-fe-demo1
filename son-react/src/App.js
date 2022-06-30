import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>vue应用</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/react'>react应用</Link>
      </Router>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
