import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../../imports/364C5FDB-65C8-4998-A344-2B74659AD93F.jpeg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logoImg} alt="DEMOL Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400">
              Profesionálne búracie a demolačné práce. Nová firma s moderným prístupom a konkurenčnými cenami.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Rýchly kontakt</h4>
            <div className="space-y-3">
              <a href="tel:+421900000000" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors">
                <Phone className="w-4 h-4" />
                +421 900 000 000
              </a>
              <a href="mailto:info@buracieprace.sk" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors">
                <Mail className="w-4 h-4" />
                info@buracieprace.sk
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Bratislava, Slovensko
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Služby</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Búracie práce</li>
              <li>Demolácie budov</li>
              <li>Výkopové práce</li>
              <li>Odvoz sutiny</li>
              <li>Sanácie</li>
              <li>Prenájom techniky</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Búracie Práce SK. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}
