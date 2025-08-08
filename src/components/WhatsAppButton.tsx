import React from 'react';
import { MessageCircleIcon } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281335222824?text=Halo%20HD%20Car%20Care,%20saya%20ingin%20konsultasi%20tentang%20layanan%20perawatan%20mobil"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircleIcon size={24} />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat via WhatsApp
      </span>
    </a>
  );
};
