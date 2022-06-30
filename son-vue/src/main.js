import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';
Vue.use(VueRouter);

Vue.config.productionTip = false;

let routerClone;
let instClone;
function render(props = {}) {
  console.log('render props', props);
  let { container } = props;
  console.log('process.env.BASE_URL', process.env.BASE_URL);

  routerClone = new VueRouter({
    mode: 'history',
    // base: '/vue',
    base: '/',
    routes
  });

  instClone = new Vue({
    router: routerClone,
    store: store,
    render: h => h(App)
  });
  console.log('instClone', instClone);

  instClone.$mount(container ? container.querySelector('#app') : '#app'); // 子应用在被注册到主应用中的时候，我们希望将子应用最后打包的代码挂载到主应用的DOM结构中，当其自己独立运行成项目时挂载到自己的'#app'中
}

// 乾坤在渲染前给我提供了一个变量 window.__POWERED_BY_QIANKUN__
if (!window.__POWERED_BY_QIANKUN__) {
  // 该应用没有加入到父应用中，独立运行
  render();
}

// 需要暴露接入协议
export async function bootstrap() {
  console.log('vue2 app bootstraped');
}
export async function mount(props) {
  // 参数props包含了主应用中的注册信息
  console.log('vue2 app mount:', props);
  render(props);
}
export async function unmount() {
  console.log('vue2 app unmount');
  // 当子应用被卸载后我们将路由等全部清空
  routerClone = null;
  instClone = null;
}
