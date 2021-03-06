import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';

let root = null;
function render(props = {}) {
  console.log('render props:', props);
  const { container } = props;
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
  root.render(<App />);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('bootstrap');
}

export async function mount(props) {
  console.log('mount');
  console.log('mount props:', props);
  render(props);
}

export async function unmount(props) {
  console.log('unmount');
  console.log('unmount props:', props);
  root.unmount();
}
