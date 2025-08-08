import React from 'react';
import { ChevronDownIcon, StarIcon } from 'lucide-react';

export const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="HD Car Care - Perawatan mobil premium" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={20} className="fill-current" />
              ))}
            </div>
            <span className="text-white text-sm">Dipercaya 1000+ Pelanggan</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Perawatan Mobil
            <span className="text-blue-400 block">Premium</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            HD Car Care menghadirkan layanan perawatan mobil terdepan dengan teknologi modern. 
            Dari detailing hingga ceramic coating, kami pastikan kendaraan Anda selalu tampil sempurna.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToServices}
              className="bg-blue-600 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-blue-700 transition-colors rounded-lg"
            >
              Lihat Layanan Kami
            </button>
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-gray-900 transition-colors rounded-lg text-center"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10 animate-bounce">
        <ChevronDownIcon size={32} className="text-white" />
      </div>
    </section>
  );
};