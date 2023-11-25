import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' elemet = {<Shop/>} />
        <Route path = '/mens' elemet = {<ShopCategory category = "men"/>} />
        <Route path = '/womens' elemet = {<ShopCategory category = "women"/>} />
        <Route path = '/kids' elemet = {<ShopCategory category = "kid"/>} />
        <Route path = "/product" elemet = {<Product/>}>
          <Route path = ':productID' elemet = {<Product/>} />
        </Route>
        <Route path = '/crat' elemet = {<Cart/>} />
        <Route path = '/login' elemet = {<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
