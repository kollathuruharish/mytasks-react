import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './redux/actions/reducer';
import reducercomp from './Redux1/Actions';
import reducedata from './Redux2/Action/Reducer';



const store = createStore(rootReducer);
console.log(store)
const storeData = createStore(reducercomp)
console.log(storeData)
const storevalue = createStore(reducedata)
console.log(storevalue)
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
