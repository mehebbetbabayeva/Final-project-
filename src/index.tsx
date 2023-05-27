import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/main.scss"
import { Provider } from 'react-redux';
import {store , persistor} from "./redux/store";
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store} >
      <PersistGate loading={"loading"} persistor={persistor}>
      <App />
      </PersistGate>
  </Provider>
);


