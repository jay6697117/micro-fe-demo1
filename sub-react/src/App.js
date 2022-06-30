import logo from './assets/logo.svg';
import './assets/App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='Browser-router'>
          <BrowserRouter>
            <Link to='/'>基座主页</Link>
          </BrowserRouter>
        </div>
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
