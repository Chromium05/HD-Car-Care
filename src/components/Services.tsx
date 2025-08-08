import React from 'react';
import { ShieldIcon, SparklesIcon, PaintbrushIcon, CarIcon, DropletIcon, WrenchIcon } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <SparklesIcon size={32} className="text-blue-600" />,
      title: 'Premium Detailing',
      description: 'Layanan detailing lengkap dengan pencucian mendalam, pembersihan interior, dan finishing premium untuk tampilan showroom.',
      features: ['Exterior Deep Clean', 'Interior Detailing', 'Engine Bay Cleaning', 'Tire & Rim Care'],
      price: 'Mulai dari Rp 150.000',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      icon: <ShieldIcon size={32} className="text-green-600" />,
      title: 'Paint Protection Film',
      description: 'Film pelindung transparan yang melindungi cat mobil dari goresan, batu kerikil, dan kerusakan lingkungan.',
      features: ['Self-Healing Technology', 'UV Protection', '10 Tahun Garansi', 'Invisible Protection'],
      price: 'Mulai dari Rp 2.500.000',
      image: 'https://images.unsplash.com/photo-1621630854548-55b25cfd9f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      icon: <PaintbrushIcon size={32} className="text-purple-600" />,
      title: 'Ceramic Coating',
      description: 'Lapisan nano-ceramic yang memberikan perlindungan jangka panjang dengan kilau yang tahan lama.',
      features: ['Hydrophobic Effect', 'Scratch Resistance', '2-5 Tahun Durability', 'Easy Maintenance'],
      price: 'Mulai dari Rp 1.200.000',
      image: 'https://images.unsplash.com/photo-1605515298946-d037856e264a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    },
    {
      icon: <CarIcon size={32} className="text-red-600" />,
      title: 'Paint Correction',
      description: 'Koreksi cat profesional untuk menghilangkan swirl marks, goresan halus, dan cacat cat lainnya.',
      features: ['Multi-Stage Polishing', 'Swirl Mark Removal', 'Scratch Repair', 'Paint Restoration'],
      price: 'Mulai dari Rp 800.000',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'
    },
    {
      icon: <DropletIcon size={32} className="text-cyan-600" />,
      title: 'Interior Protection',
      description: 'Perlindungan khusus untuk interior mobil termasuk jok kulit, dashboard, dan trim plastik.',
      features: ['Leather Treatment', 'Fabric Protection', 'Dashboard Care', 'UV Protection'],
      price: 'Mulai dari Rp 300.000',
      image: 'https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: <WrenchIcon size={32} className="text-orange-600" />,
      title: 'Maintenance Package',
      description: 'Paket perawatan rutin bulanan untuk menjaga kondisi optimal kendaraan Anda.',
      features: ['Monthly Wash', 'Wax Application', 'Interior Vacuum', 'Tire Shine'],
      price: 'Mulai dari Rp 200.000/bulan',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-4">
            Layanan Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Solusi Lengkap <span className="text-blue-600">Perawatan Mobil</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai layanan perawatan mobil premium dengan teknologi terdepan 
            dan tenaga ahli berpengalaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{service.price}</span>
                  <a 
                    href="https://wa.me/6281234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};