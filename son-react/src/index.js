import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';

function render(props = {}) {
  console.log('render props:', props);
  let { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.getElementById('root'));
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
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.getElementById('root'));
}
