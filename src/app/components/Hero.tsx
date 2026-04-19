import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="domov" className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl mb-6">
              Profesionálne Búracie a Demolačné Práce
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Poskytujeme komplexné služby v oblasti búracích prác, demolácií a výkopových prác s modernými postupmi a profesionálnym prístupom.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span>Rýchle a efektívne riešenia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span>Certifikovaní odborníci</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span>Moderná technika a vybavenie</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Získať cenovú ponuku
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#sluzby" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                Naše služby
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763478406437-147e7f60eabd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZW1vbGl0aW9uJTIwY29uc3RydWN0aW9uJTIwZXhjYXZhdG9yfGVufDF8fHx8MTc3NjU5ODAxNXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Búracie práce"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
