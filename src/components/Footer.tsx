import React from 'react';
import { InstagramIcon, FacebookIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-black py-12 px-6 md:px-12 border-t border-neutral-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-2xl font-light tracking-widest mb-6">
              LUXE<span className="font-bold">DETAIL</span>
            </h1>
            <p className="text-gray-400 mb-6">
              Elevating automotive aesthetics with precision detailing and
              premium protection solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <div size={20} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-sm uppercase tracking-wider mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Premium Detailing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Paint Protection Film
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Interior Restoration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Paint Correction
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm uppercase tracking-wider mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm uppercase tracking-wider mb-4">
              Newsletter
            </h5>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates and exclusive offers.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="bg-neutral-800 px-4 py-2 text-white border-0 flex-grow focus:ring-1 focus:ring-white outline-none" />
              <button className="bg-white text-black px-4 py-2 text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} LUXEDETAIL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};