import logo from './assets/logo.svg';
import './assets/App.css';

// base > src > App.js
// import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* <Router>
        <Link to='/vue'>vue应用</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/react'>react应用</Link>
      </Router> */}

      {/* 切换导航将微应用渲染到container容器中 */}
      <div id='container'></div>
      <hr />
      <div className='logo'>
        <img width='100' src={logo} alt='logo' />
      </div>
    </div>
  );
}

export default App;
