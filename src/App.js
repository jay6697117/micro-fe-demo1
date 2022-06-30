import logo from './assets/logo.svg';
import './assets/App.css';

import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Link to='/'>基座主页</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/vue'>vue应用</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/react'>react应用</Link>
      </BrowserRouter>

      {/* 切换导航将微应用渲染到container容器中 */}
      <div id='container'></div>
      <hr />
      <div className='logo'>
        <h3>我是基座主页</h3>
        <img width='100' src={logo} alt='logo' />
      </div>
    </div>
  );
}

export default App;
