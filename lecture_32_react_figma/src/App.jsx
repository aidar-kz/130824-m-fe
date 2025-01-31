import './App.css'
import Header from './components/ui/header/Header.jsx'
import Footer from './components/ui/footer/Footer.jsx'
import { BrowserRouter, Link, Routes, Route } from "react-router";
import HomePage from './pages/HomePage.jsx';
import CartPage from './pages/CartPage.jsx';

function App() {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </main>

      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
