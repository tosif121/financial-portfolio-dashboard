'use client';

import { Instagram, X } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://twitter.com/',
      icon: <X className="w-5 h-5" />,
      label: 'Twitter',
      className: 'bg-[#333] text-white',
    },
    {
      href: 'https://www.instagram.com/',
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      className:
        'bg-[radial-gradient(circle_at_30%_107%,#fdf497_0,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285aeb_90%)] text-white',
    },
  ];

  return (
    <footer className="w-full py-6 px-4 md:px-10 bg-background border-t border-border text-muted-foreground">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {currentYear} <span className="font-semibold text-primary">TradeWise</span>. All rights reserved.
        </p>
        <div className="flex space-x-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${link.className}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
