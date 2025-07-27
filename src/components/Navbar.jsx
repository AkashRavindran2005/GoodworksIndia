import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Impact', path: '/impact' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      background: 'var(--white)',
      boxShadow: 'var(--shadow)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0',
          position: 'relative'
        }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--text-dark)'
          }}>
            <img src = "./logo.jpeg" width={100} height={100} alt='Goodworks India'/>
          </Link>
        <div className="nav-desktop" style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',}}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: isActive(item.path) ? 'var(--primary-orange)' : 'var(--text-dark)',
                  fontWeight: isActive(item.path) ? '600' : '500',
                  padding: '0.5rem',
                  borderRadius: 'var(--radius)',
                  borderBottom: isActive(item.path) ? '2px solid var(--primary-orange)' : '2px solid transparent',
                  transition: 'var(--transition)'
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary">
              Donate Now
            </Link>
          </div>
          <button
            className="nav-mobile"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`nav-mobile-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                color: 'var(--text-dark)',
                borderBottom: '1px solid #eee',
                transition: 'var(--transition)'
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary"
            onClick={() => setIsOpen(false)}
            style={{
              margin: '1rem 1rem 0',
              display: 'block',
              textAlign: 'center'
            }}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
