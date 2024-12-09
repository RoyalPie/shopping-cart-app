import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import CartPage from './pages/cart';
import Header from './components/header';

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App
