import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Product from './pages/Products';
// import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import About from './pages/About';
import BlogPost from './pages/BlogPost';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<Product />} />
        {/* <Route path='/product/:id' element={<ProductDetails />} /> */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/about' element={<About />} />
        <Route path='/health-tips' element={<BlogPost />} />
      </Routes>
    </>
  )
}

export default App
