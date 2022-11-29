import '@/assets/css/common.less';
import 'lib-flexible';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { AliveScope } from 'react-activation'
import App from './App';
import { setWindowHeight } from './utils';
import store from './redux/store'

setWindowHeight();
window.onresize = () => {
  setWindowHeight();
};

render(
  <Provider store={store}>
    <AliveScope>
      <App />
      </AliveScope>
  </Provider>
  ,
  document.getElementById('root'),
);
