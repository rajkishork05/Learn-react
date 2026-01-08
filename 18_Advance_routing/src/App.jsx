import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Men from './pages/Men';
import Women from './pages/Women';
import Shopping from './pages/Shopping';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
const App = () => {
  return (
    <div className='uppercase text-white bg-black h-screen' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />}>  
        {/* nested routing */}
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        {/* dynamic routing */}
        <Route path='/shopping' element={<Shopping/>} />
        <Route path='/shopping/:id' element={<Shop/>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
