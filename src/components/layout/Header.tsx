import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import labLogo from '../../images/logomic.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(v => !v);

  const { pathname } = useLocation();
  useEffect(() => setIsMenuOpen(false), [pathname]);
  
  const logoUrl = labLogo;


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-3">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 sm:gap-4">
          <img
            src={logoUrl}
            alt="Lab logo"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
            loading="eager"
            decoding="async"
            onError={(e) => console.error('Logo failed to load:', (e.currentTarget as HTMLImageElement).src)}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl sm:text-3xl font-raleway font-extrabold text-cyan-700">Maksud</span>
            <span className="text-sm sm:text-base font-raleway font-semibold text-cyan-600 tracking-wide">Innovation Lab</span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `lg:text-xl sm:text-2xl font-raleway font-bold ${isActive ? 'text-cyan-800 underline underline-offset-4' : 'text-cyan-700'}`
            }
          >
            Home
          </NavLink>
          {['Team', 'Research', 'Publications', 'News', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `lg:text-xl sm:text-2xl font-raleway font-bold ${isActive ? 'text-cyan-800 underline underline-offset-4' : 'text-cyan-700'}`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40">
          <nav id="mobile-nav" className="flex flex-col space-y-4 px-4 py-4">
            <NavLink to="/" end className={({ isActive }) => `text-base font-medium ${isActive ? 'text-green-800' : 'text-gray-800'}`}>
              Home
            </NavLink>
            {['Team', 'Research', 'Publications', 'News', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) => `text-base font-medium ${isActive ? 'text-green-800' : 'text-gray-800'}`}
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
