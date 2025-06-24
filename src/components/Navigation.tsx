
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      title: 'Platform',
      href: '#platform',
      dropdown: [
        { title: 'Career Development', href: '/career-development' },
        { title: 'FinCode', href: '/fincode' },
        { title: "Let's Advance", href: '/lets-advance' },
      ]
    },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Enterprise', href: '/enterprise' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img 
                src="/lovable-uploads/3faf6c8f-e8a6-41bb-941b-997db4d2128c.png" 
                alt="Gurukul Code" 
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium font-montserrat flex items-center transition-colors"
                      >
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </a>
                      {activeDropdown === item.title && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-brand-blue px-3 py-2 text-sm font-medium font-montserrat transition-colors"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-montserrat border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-cyan font-montserrat text-white">
              Start My Journey
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-blue focus:outline-none focus:text-brand-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-brand-blue block px-3 py-2 text-base font-medium font-montserrat"
                  >
                    {item.title}
                  </a>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="text-gray-600 hover:text-brand-blue block px-3 py-2 text-sm font-medium"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-3 px-3">
                  <Button variant="outline" className="w-full font-montserrat border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    Sign In
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-cyan font-montserrat text-white">
                    Start My Journey
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
