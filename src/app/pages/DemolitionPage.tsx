import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const photos = [
  'https://images.unsplash.com/photo-1577783340889-bbdc9ec561ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwYnVpbGRpbmclMjBkZXN0cnVjdGlvbnxlbnwxfHx8fDE3NzY1OTg4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1760709750424-2bd8986f618a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZW1vbGl0aW9uJTIwYnVpbGRpbmclMjBkZXN0cnVjdGlvbnxlbnwxfHx8fDE3NzY1OTg4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1768056089011-d31299b45d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkZW1vbGl0aW9uJTIwYnVpbGRpbmclMjBkZXN0cnVjdGlvbnxlbnwxfHx8fDE3NzY1OTg4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1711441409322-b8a51037d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxkZW1vbGl0aW9uJTIwYnVpbGRpbmclMjBkZXN0cnVjdGlvbnxlbnwxfHx8fDE3NzY1OTg4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
];

const pricing = [
  { name: 'Malé budovy (do 100 m²)', price: 'od 50 €/m²' },
  { name: 'Stredné budovy (100-500 m²)', price: 'od 40 €/m²' },
  { name: 'Veľké budovy (nad 500 m²)', price: 'od 30 €/m²' },
  { name: 'Kompletná demolácia domu', price: 'od 15 000 €' }
];

const features = [
  'Kompletná demolácia budov všetkých veľkostí',
  'Použitie modernej techniky a vybavenia',
  'Odvoz a likvidácia všetkého odpadu',
  'Zabezpečenie bezpečnosti a ochrany okolia',
  'Príprava podkladov pre stavebný úrad'
];

export function DemolitionPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Späť na hlavnú stránku
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl text-gray-900 mb-4">Demolácie budov</h1>
          <p className="text-xl text-gray-600">
            Profesionálne demolácie objektov všetkých veľkostí s použitím najmodernejšej techniky
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl text-gray-900 mb-6">Čo zahŕňa naša služba</h2>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl text-gray-900 mb-6">Cenník</h2>
            <div className="space-y-4">
              {pricing.map((item, index) => (
                <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-orange-600">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <p className="text-sm text-gray-600">
                * Ceny sú orientačné. Finálna cena závisí od rozsahu prác, dostupnosti lokality a ďalších faktorov.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-gray-900 mb-6">Galéria realizácií</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
                <ImageWithFallback
                  src={photo}
                  alt={`Demolácia ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl text-gray-900 mb-4">Potrebujete cenovú ponuku?</h3>
          <p className="text-gray-600 mb-6">Kontaktujte nás a radi vám pripravíme nezáväznú cenovú ponuku</p>
          <Link to="/#kontakt" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
            Kontaktovať nás
          </Link>
        </div>
      </div>
    </div>
  );
}
