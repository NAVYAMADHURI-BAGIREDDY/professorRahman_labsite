import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Works with Vite. If deploy under a subpath, set `base` in vite.config.*,
  // e.g., export default defineConfig({ base: '/lab/' })
  const base = (import.meta as any).env?.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const logoSrc = `${normalizedBase}images/logomic.png`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-3">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand (Logo + Text) */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4">
          <motion.img
            src={logoSrc}
            alt="Maksud Innovation Lab logo"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
            loading="eager"
            decoding="async"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onError={(e) => {
              // fallback if BASE_URL is misconfigured at runtime
              (e.currentTarget as HTMLImageElement).src = '/images/logomic.png';
            }}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl sm:text-3xl font-raleway font-extrabold text-cyan-700">
              Maksud
            </span>
            <span className="text-sm sm:text-base font-raleway font-semibold text-cyan-600 tracking-wide">
              Innovation Lab
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {['Home', 'Team', 'Research', 'Publications', 'News', 'Contact'].map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `lg:text-xl sm:text-2xl font-raleway font-bold ${
                  isActive ? 'text-cyan-700' : 'text-cyan-700'
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
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {['Home', 'Team', 'Research', 'Publications', 'News', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-green-800' : 'text-gray-800'}`
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
