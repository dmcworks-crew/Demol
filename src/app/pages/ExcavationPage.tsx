import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const photos = [
  'https://images.unsplash.com/photo-1622082679766-c5912d9416eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0aW9uJTIwZWFydGh3b3JrJTIwZGlnZ2luZ3xlbnwxfHx8fDE3NzY1OTg4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1768085091650-e8e89ef57b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxleGNhdmF0aW9uJTIwZWFydGh3b3JrJTIwZGlnZ2luZ3xlbnwxfHx8fDE3NzY1OTg4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1768053823555-b75cd4ead6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxleGNhdmF0aW9uJTIwZWFydGh3b3JrJTIwZGlnZ2luZ3xlbnwxfHx8fDE3NzY1OTg4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1766595680974-e63877a2ab5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxleGNhdmF0aW9uJTIwZWFydGh3b3JrJTIwZGlnZ2luZ3xlbnwxfHx8fDE3NzY1OTg4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080'
];

const pricing = [
  { name: 'Výkop základov (do 2m hĺbky)', price: 'od 25 €/m³' },
  { name: 'Výkop základov (nad 2m hĺbky)', price: 'od 35 €/m³' },
  { name: 'Prípojky inžinierskych sietí', price: 'od 30 €/bm' },
  { name: 'Terénne úpravy', price: 'od 20 €/m³' }
];

const features = [
  'Výkopy základov pre rodinné domy a priemyselné objekty',
  'Prípojky kanalizácie, vody a elektriny',
  'Terénne úpravy a zemné práce',
  'Prenájom bagrov s obsluhou',
  'Odvoz vykopanej zeminy'
];

export function ExcavationPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Späť na hlavnú stránku
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl text-gray-900 mb-4">Výkopové práce</h1>
          <p className="text-xl text-gray-600">
            Zemné práce, výkopy základov a terénne úpravy s profesionálnou technikou
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
                * Ceny sú orientačné. Finálna cena závisí od rozsahu prác, typu pôdy a dostupnosti lokality.
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
                  alt={`Výkopové práce ${index + 1}`}
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
