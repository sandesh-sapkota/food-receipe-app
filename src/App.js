import logo from './logo.svg';
import './App.css';

import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import { Login } from './components/Login/Login';
import {  Register } from './components/Register.jsx/Register';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Cart from './pages/Cart';

function App() {
  return (
    <Provider store={store} >
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
         <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
       
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;