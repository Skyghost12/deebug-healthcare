import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Product from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
