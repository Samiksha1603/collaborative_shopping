import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Cardsss } from './components/Cardsss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes
} from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail";
import { Navigation } from './components/Navigation';
import {Home} from './Home';
import {Auth} from './Auth';
import {Cart} from './components/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <Router>
        
      
      <Routes>
      <Route exact path='*' element={<App/>} />
            <Route exact path='/productdetail' element={<ProductDetail/>} />
            <Route exact path='/homepage' element={<Home/>} />
            <Route exact path='/auth' element={<Auth/>} />
            <Route exact path='/cart' element={<Cart/>} />
            </Routes>
            
            </Router> 
       
  </React.StrictMode>
 
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
