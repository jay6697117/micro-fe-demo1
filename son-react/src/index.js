import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';

function render(props = {}) {
  console.log('render props:', props);
  const { container } = props;
  const root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
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
  render(props);
}
export async function unmount(props) {
  console.log('unmount');
  let { container } = props;
  const root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
  root.unmount();
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.getElementById('root'));
}
