import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-3">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-3xl sm:text-4xl font-raleway font-extrabold text-black">
            Maksud
          </span>
          <span className="text-base sm:text-lg font-raleway font-semibold text-gray-700 tracking-wide">
            Innovation Lab
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {['Home', 'Team', 'Research', 'Publications', 'News', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `lg:text-xl sm:text-2xl font-raleway font-semibold ${
                  isActive ? 'text-black' : 'text-black'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40">
          {/* removed animate-fade-in */}
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {['Home', 'Team', 'Research', 'Publications', 'News', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-base font-medium ${
                    isActive ? 'text-green-800' : 'text-gray-800'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
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
