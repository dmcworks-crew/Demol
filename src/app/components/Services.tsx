import { Hammer, Building2, Construction, Trash2, HardHat, Truck } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    icon: Hammer,
    title: 'Búracie práce',
    description: 'Kompletné búranie vnútorných priečok, stien a konštrukcií v bytoch a rodinných domoch.',
    link: '/buracie-prace'
  },
  {
    icon: Building2,
    title: 'Demolácie budov',
    description: 'Profesionálna demolácia objektov všetkých veľkostí s využitím modernej techniky.',
    link: '/demolacie'
  },
  {
    icon: Construction,
    title: 'Výkopové práce',
    description: 'Zemné práce, výkopy základov, prípojky inžinierskych sietí a terénne úpravy.',
    link: '/vykopove-prace'
  },
  {
    icon: Trash2,
    title: 'Odvoz sutiny',
    description: 'Komplexný odvoz a likvidácia stavebného odpadu vrátane recyklácie materiálov.',
    link: '/odvoz-sutiny'
  },
  {
    icon: HardHat,
    title: 'Sanácie',
    description: 'Odstránenie azbestu, sanácie zabudnutých konštrukcií a nebezpečných materiálov.',
    link: null
  },
  {
    icon: Truck,
    title: 'Prenájom techniky',
    description: 'Prenájom bagrov, nakladačov a ďalšej stavebnej techniky vrátane obsluhy.',
    link: null
  }
];

export function Services() {
  return (
    <section id="sluzby" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Naše služby</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ponúkame komplexné riešenia pre všetky typy búracích a demolačných prác
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const content = (
              <>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                {service.link && (
                  <div className="mt-4 text-orange-600 hover:text-orange-700">
                    Zobraziť detail →
                  </div>
                )}
              </>
            );

            return service.link ? (
              <Link
                key={index}
                to={service.link}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow border border-gray-100 block"
              >
                {content}
              </Link>
            ) : (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow border border-gray-100"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
