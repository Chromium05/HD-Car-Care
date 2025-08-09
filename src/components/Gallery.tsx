import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryImages = [{
    url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    alt: 'Black sports car after detailing'
  }, {
    url: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80',
    alt: 'Red sports car with ceramic coating'
  }, {
    url: 'https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Silver luxury car detailed interior'
  }, {
    url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Porsche with paint protection'
  }, {
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Sports car exterior detailing'
  }, {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Classic car restoration'
  }];
  return <section id="gallery" className="py-24 px-6 md:px-12 bg-neutral-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-green-400 mb-4">
            Our Portfolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-light">
            Showcasing Our <span className="font-medium text-green-400">Finest Work</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => <div key={index} className="aspect-[4/3] overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(image.url)}>
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>)}
        </div>
      </div>
      {/* Image Modal */}
      {selectedImage && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors" onClick={() => setSelectedImage(null)}>
            <XIcon size={24} />
          </button>
          <img src={selectedImage} alt="Enlarged gallery image" className="max-w-full max-h-[85vh] object-contain" onClick={e => e.stopPropagation()} />
        </div>}
    </section>;
};