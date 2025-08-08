import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon, MessageCircleIcon } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-neutral-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-green-400 font-semibold mb-4">
            Hubungi Kami
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Konsultasi <span className="text-green-400">Gratis</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Tim ahli kami siap membantu Anda memilih layanan terbaik untuk kendaraan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-800 rounded-xl shadow-lg p-8 border border-neutral-700">
            <h4 className="text-xl font-bold text-white mb-6">Kirim Pesan</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white placeholder-gray-400" 
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Nomor WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white placeholder-gray-400" 
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-gray-300 mb-2">
                  Informasi Kendaraan
                </label>
                <input 
                  type="text" 
                  id="vehicle" 
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white placeholder-gray-400" 
                  placeholder="Contoh: Honda Civic 2020"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Layanan yang Diminati
                </label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white"
                >
                  <option value="">Pilih layanan</option>
                  <option value="detailing">Premium Detailing</option>
                  <option value="ppf">Paint Protection Film</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="correction">Paint Correction</option>
                  <option value="interior">Interior Protection</option>
                  <option value="maintenance">Maintenance Package</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-colors text-white placeholder-gray-400" 
                  placeholder="Ceritakan kebutuhan Anda..."
                ></textarea>
              </div>
              
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <MessageCircleIcon size={20} className="mr-2" />
                Kirim via WhatsApp
              </a>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-neutral-800 rounded-xl shadow-lg p-8 border border-neutral-700">
              <h4 className="text-xl font-bold text-white mb-6">Informasi Kontak</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon size={24} className="mr-4 mt-1 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Alamat Workshop</p>
                    <p className="text-gray-300">Jl. Raya Kemang No. 123</p>
                    <p className="text-gray-300">Jakarta Selatan 12560</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <PhoneIcon size={24} className="mr-4 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Telepon & WhatsApp</p>
                    <p className="text-gray-300">+62 812-3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MailIcon size={24} className="mr-4 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">info@hdcarcare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ClockIcon size={24} className="mr-4 mt-1 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Jam Operasional</p>
                    <p className="text-gray-300">Senin - Jumat: 08:00 - 18:00</p>
                    <p className="text-gray-300">Sabtu: 08:00 - 16:00</p>
                    <p className="text-gray-300">Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden border border-neutral-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.7644271138192!2d112.71444627371689!3d-7.280088871542487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb6beb3f3687%3A0xe2abeaeb82d35f2d!2sHD%20Car%20Care%20Surabaya%20Barat!5e1!3m2!1sid!2sid!4v1754632946000!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HD Car Care Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};