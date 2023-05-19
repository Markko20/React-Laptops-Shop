import { Route, Routes } from "react-router";
import Home from './pages/Home'
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import './scss/normalize.scss'
import CardOpen from './pages/CardOpen'

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cartItem/:id" element={<CardOpen />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
