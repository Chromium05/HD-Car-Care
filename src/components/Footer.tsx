import type React from "react"
import { Instagram, Facebook, MessageCircle } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h1 className="text-2xl font-bold tracking-wide mb-6 text-green-500">
            HD<span className="text-gray-300"> Car Care</span>
          </h1>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Spesialis perawatan mobil premium di Surabaya dengan teknologi terdepan dan layanan berkualitas tinggi untuk
            kendaraan kesayangan Anda.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-sm uppercase tracking-wider mb-4 text-green-400">Layanan</h5>
          <ul className="space-y-2">
            <li>
              <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">
                Premium Detailing
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">
                Paint Protection Film
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">
                Ceramic Coating
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">
                Paint Correction
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors">
                Interior Protection
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-sm uppercase tracking-wider mb-4 text-green-400">Perusahaan</h5>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-gray-400 hover:text-green-400 transition-colors">
                Galeri
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-gray-400 hover:text-green-400 transition-colors">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">
                Hubungi Kami
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex space-x-4">
          <a
            href="https://instagram.com/hdcarcare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com/hdcarcare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <p>&copy; {new Date().getFullYear()} HD Car Care Surabaya. Semua hak dilindungi.</p>
      </div>
    </footer>
  )
}

export default Footer