import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav from './components/nav';
import { ShopContextProvider } from './context/shopContext';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Nav/>
        <div className='p-5'></div>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>              
  );
}

export default App;
