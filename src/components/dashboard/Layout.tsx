'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@/components/layout/Sidebar'));
const Footer = dynamic(() => import('@/components/layout/Footer'));
const Header = dynamic(() => import('@/components/layout/Header'));
const MobileHeader = dynamic(() => import('@/components/layout/MobileHeader'));

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Determine dark mode based on theme
  const isDarkMode = mounted && theme === 'dark';

  if (!mounted) return null;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 bg-background text-foreground ${
        mobileMenuOpen ? 'overflow-hidden max-h-screen' : ''
      }`}
    >
      {/* Mobile header */}
      <MobileHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <div className="flex">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Desktop Header */}
          <Header isDarkMode={isDarkMode} />

          {/* Page content */}
          <main className="p-4 md:p-6 flex-1 overflow-y-auto scroll-smooth">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
