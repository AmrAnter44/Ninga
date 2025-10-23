'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ============================================
// NAVBAR COMPONENT
// ============================================
const FormNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full backdrop-blur-lg z-50 border-b transition-all duration-300 ${
      scrolled ? 'bg-zinc-950/95 border-zinc-800' : 'bg-zinc-950/80 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">NINGA</span>
          </Link>
          
          <div className="hidden md:flex gap-8">
            <Link href="/#services" className="hover:text-red-500 transition">Services</Link>
            <Link href="/#program" className="hover:text-red-500 transition">Programs</Link>
            <Link href="/#testimonials" className="hover:text-red-500 transition">About</Link>
            <Link href="/#contact" className="hover:text-red-500 transition">Contact</Link>
          </div>

          <Link href="/" className="hidden md:flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-full font-semibold transition transform hover:scale-105">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-4 py-6 space-y-4">
            <Link href="/#services" className="block hover:text-red-500 transition">Services</Link>
            <Link href="/#program" className="block hover:text-red-500 transition">Programs</Link>
            <Link href="/#testimonials" className="block hover:text-red-500 transition">About</Link>
            <Link href="/#contact" className="block hover:text-red-500 transition">Contact</Link>
            <Link href="/" className="flex items-center gap-2 justify-center w-full bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-full font-semibold transition">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// ============================================
// MAIN FORM PAGE
// ============================================
export default function FormPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <FormNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center mb-8">
          <div className="inline-block bg-red-500/20 backdrop-blur-sm border border-red-500/30 px-4 py-2 rounded-full text-red-400 font-semibold mb-6">
            💪 Start Your Training Journey
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">NINGA Training</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Fill out the form below to begin your transformation. We'll contact you within 24 hours to discuss your goals.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-4 md:p-8 shadow-2xl">
            {/* Responsive iframe wrapper */}
            <div className="relative w-full overflow-hidden rounded-2xl" style={{
              paddingBottom: 'min(180%, 2000px)', // Responsive height
              maxHeight: '85vh'
            }}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe7lP8ka_ZCbdlxZI5MZn4nQtxKaKOSTuH7n24ozAnaO4ablQ/viewform?embedded=true"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="NINGA Training Registration Form"
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-zinc-400 mb-4">
              Need help? Contact us directly
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-zinc-900 border-t border-zinc-800 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-6 h-6 text-red-500" />
            <span className="text-lg font-bold">NINGA <span className="text-red-500">TRAINING</span></span>
          </div>
          <p className="text-zinc-500">
            &copy; 2025 NINGA Training. All rights reserved. Train Hard. Get Results.
          </p>
        </div>
      </footer>
    </div>
  );
}