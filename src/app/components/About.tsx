import { Award, Users, Clock, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Award, value: 'Nová', label: 'Mladá a dynamická firma' },
  { icon: Users, value: 'Prvých', label: 'Klientov hľadáme' },
  { icon: Clock, value: '24/7', label: 'Dostupnosť' },
  { icon: Shield, value: '100%', label: 'Poisťovne krytie' }
];

export function About() {
  return (
    <section id="o-nas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1678944827354-fb54b9040a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwY29uc3RydWN0aW9uJTIwZXhjYXZhdG9yfGVufDF8fHx8MTc3NjU5ODAxNXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Naše práce"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              Váš nový partner pre búracie práce
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Sme mladá a ambiciózna firma, ktorá práve vstupuje na trh búracích a demolačných prác. Naša spoločnosť sa špecializuje na komplexné riešenia od malých búracích prác v bytoch až po demoláciu celých objektov.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Hoci sme nová firma, disponujeme modernou technikou a odborným tímom s potrebnými certifikátmi, ktorí zabezpečia bezpečné a efektívne vykonanie prác v súlade s platnými normami a predpismi. Našou výhodou sú konkurenčné ceny a flexibilný prístup.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Icon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
