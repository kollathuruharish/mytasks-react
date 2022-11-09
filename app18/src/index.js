import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
// import { createStore } from "Redux1";

import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import rootReducer from './redux/reducer';
// import ReducerComp from './Redux1/Reducer';
import MainReducer from './redux/reducer';



const store=createStore(MainReducer)
console.log(store)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
