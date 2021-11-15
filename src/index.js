import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import configureStore from './store/configureStore'
import reportWebVitals from './reportWebVitals'



ReactDOM.render(
 <React.StrictMode>
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  
 </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
//
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
