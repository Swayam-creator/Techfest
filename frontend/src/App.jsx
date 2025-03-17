import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router'; // Correct import
import Navbar from './Components/Navbar'; // Assuming Navbar is in a Components folder
import Home from './Pages/Home';
import About from './Pages/About';
import Event from './Pages/Event';
import Speakers from './Pages/Speakers';
import Cart from './Pages/Cart';
import ChatBot from './Pages/ChatBot'

function App() {
  return (
    <div className='bg-black w-full h-screen'>
    <Router>
    
      {/* Navbar is outside of Routes so it will be visible across all pages */}
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Event />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/events-registred' element={<Cart />} />
        <Route path='/chat-bot' element={<ChatBot />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
