import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/main.scss"
import { Provider } from 'react-redux';
import store from "./redux/store";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);


