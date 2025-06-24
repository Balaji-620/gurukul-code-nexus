
import React from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Career Development", href: "#career" },
        { name: "FinCode", href: "#fincode" },
        { name: "Let's Advance", href: "#advance" },
        { name: "Enterprise", href: "#enterprise" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#cases" },
        { name: "Help Center", href: "#help" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Partners", href: "#partners" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Use", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "Security", href: "#security" },
      ]
    }
  ];

  const ctaButtons = [
    { text: "Start My Career Journey", href: "#career", primary: true },
    { text: "Explore FinCode Demo", href: "#fincode" },
    { text: "Follow Let's Advance", href: "#advance" },
    { text: "Join Our Vertical AI Beta List", href: "#beta" },
  ];

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-white/10">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose your path and start your AI-powered growth journey today
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {ctaButtons.map((button, index) => (
              <a
                key={button.text}
                href={button.href}
                className={`group flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 hover-scale ${
                  button.primary
                    ? 'bg-gradient-to-r from-brand-orange to-brand-cyan text-white'
                    : 'border border-white/30 text-white hover:bg-white/10'
                }`}
              >
                {button.text}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/730a27c8-03d0-4172-b773-f840a4c9c7e1.png" 
              alt="Gurukul Code" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              The AI-Powered Career & Domain Intelligence Ecosystem. 
              Empowering growth through intelligent, ethical, and purpose-driven solutions.
            </p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@gurukulcode.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-montserrat font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
            <div className="mb-4 md:mb-0">
              © 2024 Gurukul Code. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span>Built with 🤖 AI-Native Architecture</span>
              <span>•</span>
              <span>Ethical AI for Growth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
