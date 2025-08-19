import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Sustainability', href: '#' }
    ],
    Support: [
      { name: 'Size Guide', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Shipping', href: '#' },
      { name: 'Contact Us', href: '#' }
    ],
    Connect: [
      { name: 'Newsletter', href: '#' },
      { name: 'Store Locator', href: '#' },
      { name: 'Gift Cards', href: '#' },
      { name: 'Reviews', href: '#' }
    ]
  } as const;

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">EcoStep</h3>
            <p className="text-stone-400 mb-6">
              Sustainable footwear for the conscious consumer. 
              Step forward with purpose.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-stone-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-stone-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-2">Stay in the Loop</h4>
            <p className="text-stone-400 mb-4">Get the latest on new releases and exclusive offers</p>
            <div className="flex gap-2 items-start">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-stone-800 text-white rounded-full border border-stone-700 focus:outline-none focus:border-emerald-600"
                required
                aria-required="true"
              />
              <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-stone-400">
            © 2024 EcoStep. All rights reserved. Made with care for people and planet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;