import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Event from './Pages/Event';
import Speakers from './Pages/Speakers';
import Cart from './Pages/Cart';
import ChatBot from './Pages/ChatBot';
import Cursor from './Components/Cursor';

function App() {
  return (
    <div className='bg-black w-full h-screen'>
      <Router>
        <Cursor />
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
