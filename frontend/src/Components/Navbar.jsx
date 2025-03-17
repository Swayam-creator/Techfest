import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router';
import { LuShoppingBag } from "react-icons/lu";
import { motion } from "motion/react";
import gsap from "gsap";
import { NavLink } from 'react-router';
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu state

  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const navigate = useNavigate();
  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // GSAP animation for logo and nav links
    gsap.fromTo(logoRef.current, {
      opacity: 0,
      y: -50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "easeOut"
    });

    gsap.fromTo(navLinksRef.current.children, {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "easeOut"
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const homePage=()=>{
    navigate('/');
  }

  return (
    <div className={`navbar-container ${sticky ? 'sticky' : ''}`}>
      <div className={`flex justify-between items-center p-4 ${sticky ? 'bg-black' : 'bg-black'} text-white`}>
        {/* Logo */}
        <div ref={logoRef} className="text-3xl font-bold" onClick={homePage}>
        TechUtsav
        </div>

        {/* Desktop Navigation Links */}
        <motion.div ref={navLinksRef} className="hidden md:flex justify-between items-center space-x-4">
          <Link to="/" className="hover:underline cursor-pointer">Home</Link>
          <Link to="/about" className="hover:underline cursor-pointer">About</Link>
          <Link to="/events" className="hover:underline cursor-pointer">Events</Link>
          <Link to="/speakers" className="hover:underline cursor-pointer">Speakers</Link>
          <Link to="/chat-bot" className="hover:underline cursor-pointer">Chat-Bot</Link>
          <Link to="/events-registred" className="hover:underline cursor-pointer">
            <LuShoppingBag className="text-xl" />
          </Link>
        </motion.div>

        {/* Mobile Hamburger Menu (Visible only on mobile) */}
        <div className="md:hidden flex items-center lg:invisible">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 p-4 bg-black text-white">
          <Link to="/" className="hover:underline cursor-pointer">Home</Link>
          <Link to="/about" className="hover:underline cursor-pointer">About</Link>
          <Link to="/events" className="hover:underline cursor-pointer">Events</Link>
          <Link to="/speakers" className="hover:underline cursor-pointer">Speakers</Link>
          <Link to="/chat-bot" className="hover:underline cursor-pointer">Chat-Bot</Link>
          <Link to="/events-registred" className="hover:underline cursor-pointer">
            <LuShoppingBag className="text-xl" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
