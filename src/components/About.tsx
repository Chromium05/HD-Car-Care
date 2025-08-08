import React from 'react';
import { CheckIcon, AwardIcon, UsersIcon, ClockIcon, ShieldIcon } from 'lucide-react';

export const About = () => {
  const achievements = [
    { icon: <UsersIcon size={24} />, number: '1000+', label: 'Pelanggan Puas' },
    { icon: <AwardIcon size={24} />, number: '5+', label: 'Tahun Pengalaman' },
    { icon: <ClockIcon size={24} />, number: '24/7', label: 'Customer Support' },
    { icon: <ShieldIcon size={24} />, number: '100%', label: 'Garansi Kualitas' }
  ];

  const highlights = [
    'Teknologi terdepan dalam perawatan mobil',
    'Tenaga ahli bersertifikat internasional',
    'Produk premium berkualitas tinggi',
    'Garansi untuk setiap layanan',
    'Spesialis kendaraan mewah dan sport',
    'Konsultasi gratis untuk semua pelanggan'
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-4">
              Tentang HD Car Care
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Komitmen Terhadap{' '}
              <span className="text-blue-600">Kualitas Premium</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              HD Car Care didirikan dengan visi menjadi penyedia layanan perawatan mobil premium 
              terdepan di Indonesia. Kami memahami bahwa kendaraan Anda bukan hanya alat transportasi, 
              tetapi juga investasi berharga yang membutuhkan perawatan terbaik.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dengan menggabungkan teknologi terdepan, produk berkualitas tinggi, dan keahlian 
              tenaga profesional, kami berkomitmen memberikan hasil yang melampaui ekspektasi 
              setiap pelanggan.
            </p>
            
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon size={20} className="mr-3 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="HD Car Care workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1621630854548-55b25cfd9f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Professional detailing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="h-32 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Paint protection application" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605515298946-d037856e264a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Ceramic coating process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pencapaian Kami
            </h3>
            <p className="text-gray-600">
              Kepercayaan pelanggan adalah pencapaian terbesar kami
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};