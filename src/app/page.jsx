"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Flame, Target, Users, Award, ArrowRight, CheckCircle, Star, Zap, Calendar, TrendingUp, Shield, Activity } from 'lucide-react';
import heroImage from '../../public/bg.webp';
import Image from 'next/image';
// ============================================
// SCROLL ANIMATION HOOK
// ============================================
const useScrollAnimation = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

// ============================================
// NAVBAR COMPONENT
// ============================================
const Navbar = () => {
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
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold">NINGA <span className="text-red-500">MMA</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-red-500 transition">Training</a>
            <a href="#program" className="hover:text-red-500 transition">Programs</a>
            <a href="#testimonials" className="hover:text-red-500 transition">Fighters</a>
            <a href="#contact" className="hover:text-red-500 transition">Contact</a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold transition transform hover:scale-105">
            Join Now
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 animate-slideDown">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" className="block hover:text-red-500 transition">Training</a>
            <a href="#program" className="block hover:text-red-500 transition">Programs</a>
            <a href="#testimonials" className="block hover:text-red-500 transition">Fighters</a>
            <a href="#contact" className="block hover:text-red-500 transition">Contact</a>
            <button className="w-full bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold transition">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
<Image 
  src={heroImage}
  alt="MMA Fighter"
  fill
  className="object-cover"
  priority
/>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0  z-10"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-red-500/20 backdrop-blur-sm border border-red-500/30 px-4 py-2 rounded-full text-red-400 font-semibold mb-6 animate-fadeIn">
            🥊 Professional MMA Training
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slideInLeft">
            Train Like a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              Champion Fighter.
            </span>
          </h1>
          <p className="text-xl text-zinc-300 mb-8 leading-relaxed animate-slideInLeft" style={{animationDelay: '0.2s'}}>
            Step into the octagon of life with confidence. Master striking, grappling, and conditioning 
            under world-class MMA coaches. Whether you're a beginner or seasoned fighter, we'll push you beyond your limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft" style={{animationDelay: '0.4s'}}>
            <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition group transform hover:scale-105">
              Start Training
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-zinc-700 hover:border-red-500 px-8 py-4 rounded-full font-semibold text-lg transition transform hover:scale-105 backdrop-blur-sm">
              Watch Classes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SERVICES SECTION
// ============================================
const ServicesSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      icon: "🥊",
      title: "Striking & Boxing",
      description: "Master punches, kicks, elbows, and knees. Develop devastating striking combinations and knockout power.",
      delay: "0s"
    },
    {
      icon: "🤼",
      title: "Grappling & Wrestling",
      description: "Learn takedowns, submissions, and ground control. Dominate opponents with superior grappling techniques.",
      delay: "0.1s"
    },
    {
      icon: "🥋",
      title: "Brazilian Jiu-Jitsu",
      description: "Perfect the art of submissions and positional control. Roll with the best and sharpen your ground game.",
      delay: "0.2s"
    },
    {
      icon: "⚡",
      title: "Fight Conditioning",
      description: "Build championship-level cardio, strength, and explosiveness. Train like the NINGA fighters you admire.",
      delay: "0.3s"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-zinc-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Fight Disciplines</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Complete MMA training covering all aspects of mixed martial arts. From striking to submissions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-red-500 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{transitionDelay: isVisible ? service.delay : '0s'}}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROBLEM/SOLUTION SECTION
// ============================================
const ProblemSolutionSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem - Slide from Right */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="inline-block bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-400 font-semibold">
              ⚠️ The Problem
            </div>
            <h2 className="text-4xl font-bold">Training Without Direction</h2>
            <p className="text-zinc-400 text-lg">
              Hitting the heavy bag randomly won't make you a fighter. YouTube tutorials won't teach you 
              real technique. Bad habits lead to injuries and wasted time in the gym.
            </p>
            <p className="text-zinc-400 text-lg">
              Without proper coaching, you'll plateau fast. Your cardio won't improve, your technique 
              stays sloppy, and you'll never reach your fighting potential.
            </p>
          </div>

          {/* Solution - Slide from Left */}
          <div className={`bg-gradient-to-br from-red-500/20 to-orange-500/20 p-8 rounded-2xl border border-red-500/30 space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`} style={{transitionDelay: '0.2s'}}>
            <div className="inline-block bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-400 font-semibold">
              ✅ The Solution
            </div>
            <h2 className="text-4xl font-bold">NINGA MMA Coaching</h2>
            <p className="text-zinc-300 text-lg">
              Train under professional MMA coaches with real fight experience. Get personalized feedback, 
              structured progressions, and a clear path from beginner to warrior.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">Learn proper striking mechanics to prevent injuries</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">Master grappling fundamentals with live sparring</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">Build fight-ready conditioning and mental toughness</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// PROGRAM SECTION
// ============================================
const ProgramSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      text: "Flexible class schedules for all levels",
      delay: "0s"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Pro coaches with real fight experience",
      delay: "0.1s"
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Personalized training plans for your goals",
      delay: "0.2s"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Full cage, mats, and pro-grade equipment",
      delay: "0.3s"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Track your progress and skill development",
      delay: "0.4s"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      text: "Strength & conditioning programs included",
      delay: "0.5s"
    }
  ];

  return (
    <section id="program" className="py-20 px-4 bg-zinc-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Fighter Development Program</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From your first jab to your first fight. A complete system designed to transform 
            beginners into confident fighters in just 8 weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex items-start gap-4 bg-zinc-800/30 p-5 rounded-xl border border-zinc-700/50 hover:border-red-500/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{transitionDelay: isVisible ? feature.delay : '0s'}}
            >
              <div className="text-red-500 flex-shrink-0">
                {feature.icon}
              </div>
              <span className="text-zinc-300">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className={`bg-gradient-to-r from-red-500 to-orange-500 p-1 rounded-2xl max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`} style={{transitionDelay: '0.6s'}}>
          <div className="bg-zinc-900 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Step Into The Ring?</h3>
            <p className="text-zinc-400 mb-6">
              Join our next Fighter Development cohort. Limited spots available. 
              Start your MMA journey with the best coaches in the game.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition transform hover:scale-105">
              Claim Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS SECTION
// ============================================
const TestimonialsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Amateur Fighter",
      content: "I went from zero experience to winning my first amateur bout in 6 months. The coaches here are legit - they've been in the cage and know exactly what it takes.",
      rating: 5,
      delay: "0s"
    },
    {
      name: "Isabella Rodriguez",
      role: "BJJ Blue Belt",
      content: "The grappling program is insane. I've learned more in 3 months here than 2 years at my old gym. The live rolling sessions are addictive!",
      rating: 5,
      delay: "0.2s"
    },
    {
      name: "David Thompson",
      role: "Fitness Enthusiast",
      content: "I just wanted to get in shape, but now I'm obsessed with MMA. Lost 30 pounds and gained skills I never thought possible. This place changes lives.",
      rating: 5,
      delay: "0.4s"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Fighter Testimonials</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Hear from our students who transformed from beginners to confident fighters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700 hover:border-red-500/50 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{transitionDelay: isVisible ? testimonial.delay : '0s'}}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                ))}
              </div>
              <p className="text-zinc-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t border-zinc-700 pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER SECTION
// ============================================
const Footer = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <footer id="contact" className="py-12 px-4 bg-zinc-900 border-t border-zinc-800" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-3 gap-8 mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold">NINGA <span className="text-red-500">MMA</span></span>
            </div>
            <p className="text-zinc-400">
              Train like a champion. Fight like a warrior. Live like a legend.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#services" className="hover:text-red-500 transition">Training</a></li>
              <li><a href="#program" className="hover:text-red-500 transition">Programs</a></li>
              <li><a href="#testimonials" className="hover:text-red-500 transition">Fighters</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>Email: info@NINGAmma.com</li>
              <li>Phone: +1 (555) MMA-FIGHT</li>
              <li>Location: Fight District, Your City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500">
          <p>&copy; 2025 NINGA MMA. All rights reserved. Train Hard. Fight Smart.</p>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function NINGAMMALanding() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
          animation-fill-mode: both;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
          animation-fill-mode: both;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
      
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProblemSolutionSection />
      <ProgramSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}