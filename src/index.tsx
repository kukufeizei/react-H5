import '@/assets/css/common.less';
import 'lib-flexible';
import { render } from 'react-dom';
// import { GlobalProvider } from 'rmox';
import { Provider } from 'react-redux'

import App from './App';
import { setWindowHeight } from './utils';
import store from './redux/store'

setWindowHeight();
window.onresize = () => {
  setWindowHeight();
};



render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'),
);
