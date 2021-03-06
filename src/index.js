import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.scss';


const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);



ReactDOM.render(<Root />, document.getElementById('root'));