import React from 'react';
import { StarIcon } from 'lucide-react';
export const Testimonials = () => {
  const testimonials = [{
    name: 'Michael R.',
    vehicle: 'Porsche 911 GT3',
    quote: 'The level of attention to detail is unmatched. My GT3 has never looked better, even compared to when I first took delivery.',
    rating: 5
  }, {
    name: 'Alexandra T.',
    vehicle: 'Mercedes-AMG GT',
    quote: "Their ceramic coating service has made maintaining my AMG's finish significantly easier. Even after months, water still beads perfectly.",
    rating: 5
  }, {
    name: 'James L.',
    vehicle: 'Ferrari 488',
    quote: 'The paint protection film is virtually invisible yet has already saved my front end from several rock chips. Worth every penny.',
    rating: 5
  }];
  return <section className="py-24 px-6 md:px-12 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            Client Experiences
          </h2>
          <h3 className="text-3xl md:text-4xl font-light">
            What Our <span className="font-medium">Clients Say</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-neutral-900 p-8 border-t border-neutral-700">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <blockquote className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.vehicle}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};