import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Cart from './pages/Cart/Cart';
import Rotes from './pages/Rotes';
import Products from './pages/Products';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useState } from 'react';
import { CommContext } from './pages/CommContext';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  AOS.init({duration: 1800});

  const [cart, setCart] = useState([])
  const [count,setCount] = useState(0)

  const addCart = (data) => {
    setCart([ ...cart,data,]);
    setCount(count + 1);
  }
   
  return (
    <div className="App">
      <CommContext.Provider value={{addCart,count,setCount,cart, setCart}}>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element ={<Rotes/>}></Route>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/shop"element={<Products />}/>
          </Routes>
        </Router>
      </CommContext.Provider>
    </div>
  );
}

export default App
