import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from "./app/store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          {/*<BrowserRouter> /!*- for localhost*!/*/}
          <HashRouter> {/*- for github pages*/}
              <App/>
          </HashRouter>
          {/*</BrowserRouter>*/}
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
