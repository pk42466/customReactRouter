import React from 'react';
import Header from './header/header';
import { Router } from './Router';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';

const routeOptions = [
  {
      route: "/",
      component: <Home />,
      default: true
  },
  {
      route: "/about",
      component: <About />
  },
  {
      route: "/products",
      component: <Products/>
  }
]
function App() {
  return (
    <div className="App">
      <Header />
      <Router routeOptions = {routeOptions} />
    </div>
  );
}

export default App;
