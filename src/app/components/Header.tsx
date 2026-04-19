import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import logoImg from '../../imports/364C5FDB-65C8-4998-A344-2B74659AD93F.jpeg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="DEMOL Logo" className="h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Domov</Link>
            <a href="/#sluzby" className="text-gray-700 hover:text-orange-600 transition-colors">Služby</a>
            <a href="/#o-nas" className="text-gray-700 hover:text-orange-600 transition-colors">O nás</a>
            <a href="/#kontakt" className="text-gray-700 hover:text-orange-600 transition-colors">Kontakt</a>
            <a href="tel:+421900000000" className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              <Phone className="w-4 h-4" />
              +421 900 000 000
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Domov</Link>
            <a href="/#sluzby" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Služby</a>
            <a href="/#o-nas" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">O nás</a>
            <a href="/#kontakt" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Kontakt</a>
            <a href="tel:+421900000000" className="flex items-center gap-2 mx-4 justify-center bg-orange-600 text-white px-4 py-2 rounded-lg">
              <Phone className="w-4 h-4" />
              +421 900 000 000
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
