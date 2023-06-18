import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Home/Homepage';
import About from './Pages/About/About';
import BookingPage from './Pages/Booking/BookingPage';
import Menu from './Pages/Menu/Menu';
import Login from './Pages/Login/Login';

import Order from './Pages/Order/Order';

const Routing = () => {
  return (
    <div>
        <Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/reservation" element={<BookingPage />} />
				<Route path="/order" element={<Order />} />
				<Route path="/login" element={<Login/>} />
			</Routes>
    </div>
  )
}

export default Routing
