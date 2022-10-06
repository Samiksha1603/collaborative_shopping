import React, { useState } from "react";
import { Navigation } from './components/Navigation'
import { Cardsss } from './components/Cardsss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Auth} from "./Auth";
import {Cart} from "./components/Cart";
import {Home} from "./Home"

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes
} from "react-router-dom";
import { ProductDetail } from "./components/ProductDetail";
import { data } from "./components/data";
import { CartProvider } from "react-use-cart";


function App() {
return (
  <div className="App">
    <Home/>
 </div>

 );

}

export default App;
