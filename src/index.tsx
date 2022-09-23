import '@/assets/css/common.less';
import 'lib-flexible';
import { render } from 'react-dom';
import { GlobalProvider } from 'rmox';
import App from './App';
import { setWindowHeight } from './utils';

setWindowHeight();
window.onresize = () => {
  setWindowHeight();
};

render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
  ,
  document.getElementById('root'),
);
