import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <>
    <ToastContainer/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>



    </Routes>
    <Footer/>
    </>
  );
}

export default App;
