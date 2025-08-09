import React from 'react';
import { StarIcon } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael R.',
      vehicle: 'Porsche 911 GT3',
      quote: 'The level of attention to detail is unmatched. My GT3 has never looked better, even compared to when I first took delivery.',
      rating: 5
    },
    {
      name: 'Alexandra T.',
      vehicle: 'Mercedes-AMG GT',
      quote: "Their ceramic coating service has made maintaining my AMG's finish significantly easier. Even after months, water still beads perfectly.",
      rating: 5
    },
    {
      name: 'James L.',
      vehicle: 'Ferrari 488',
      quote: 'The paint protection film is virtually invisible yet has already saved my front end from several rock chips. Worth every penny.',
      rating: 5
    },
    {
      name: 'Sarah K.',
      vehicle: 'BMW M4 Competition',
      quote: 'HD Car Care transformed my M4 completely. The paint correction removed years of swirl marks and now it looks showroom fresh.',
      rating: 5
    },
    {
      name: 'David W.',
      vehicle: 'Audi RS6 Avant',
      quote: 'Professional service from start to finish. They explained every step and the results exceeded my expectations. Highly recommended!',
      rating: 5
    },
    {
      name: 'Lisa M.',
      vehicle: 'Lamborghini Huracán',
      quote: 'The team at HD Car Care knows exotic cars inside and out. My Huracán has never looked more stunning. Exceptional work!',
      rating: 5
    },
    {
      name: 'Robert C.',
      vehicle: 'Tesla Model S Plaid',
      quote: 'Even for electric vehicles, their detailing expertise shines through. The interior protection service was particularly impressive.',
      rating: 5
    },
    {
      name: 'Amanda J.',
      vehicle: 'Range Rover Sport',
      quote: 'Monthly maintenance package is fantastic value. My Range Rover always looks pristine without me having to worry about it.',
      rating: 5
    },
    {
      name: 'Kevin H.',
      vehicle: 'McLaren 720S',
      quote: 'Trust them with my McLaren completely. The ceramic coating application was flawless and the customer service is outstanding.',
      rating: 5
    },
    {
      name: 'Jennifer P.',
      vehicle: 'Bentley Continental GT',
      quote: 'The attention to luxury vehicles is evident in every detail. My Continental GT received VIP treatment throughout the process.',
      rating: 5
    }
  ];

  // Create seamless infinite loop by duplicating testimonials
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 px-6 md:px-12 bg-black overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            Client Experiences
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-white">
            What Our <span className="font-medium">Clients Say</span>
          </h3>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative -mx-6 md:-mx-12 lg:-mx-24 xl:-mx-32">
          {/* Enhanced gradient overlays for complete fade effect */}
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black via-black to-black/20 z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black via-black to-black/20 z-20 pointer-events-none"></div>
          
          {/* Additional stronger fade layers */}
          <div className="absolute left-0 top-0 w-8 md:w-16 h-full bg-black z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-8 md:w-16 h-full bg-black z-20 pointer-events-none"></div>
          
          {/* Infinitely scrolling testimonials */}
          <div className="flex animate-scroll-left pl-16 md:pl-32">
            {infiniteTestimonials.map((testimonial, index) => (
              <div 
                key={`testimonial-${index}`}
                className="flex-shrink-0 w-72 md:w-80 mx-3 md:mx-4 bg-neutral-900 p-6 md:p-8 border-t border-neutral-700 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 leading-relaxed min-h-[100px] md:min-h-[120px] text-sm md:text-base">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium text-white text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-400">{testimonial.vehicle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
