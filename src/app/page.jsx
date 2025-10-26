"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Flame, Target, Users, Award, ArrowRight, CheckCircle, Star, Zap, Calendar, TrendingUp, Shield, Activity, MessageCircle, Facebook, Instagram, Dumbbell, Heart, Trophy } from 'lucide-react';
import heroImage from '../../public/bg.webp';
import secbg from '../../public/secbg.webp';
import secbgtwo from '../../public/secbgtwo.webp';
import Image from 'next/image';
import SplashScreen from './SplashScreen';
import Link from 'next/link';

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
// WHATSAPP FLOATING BUTTON
// ============================================
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "201155013756";
    const message = "مرحباً! عايز أعرف أكتر عن تدريبات NINGA";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 p-4 rounded-full shadow-2xl z-50 transition-all duration-500 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
      <MessageCircle className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        whatsapp
      </span>
    </button>
  );
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
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40}></Image>
            <span className="text-xl font-bold">NINGA</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-red-500 transition">Services</a>
            <a href="#Why" className="hover:text-red-500 transition"> Why Ninga </a>
            <a href="#pricing" className="hover:text-red-500 transition">Pricing</a>
            <a href="#contact" className="hover:text-red-500 transition">Contact</a>
          </div>

          <Link href="/Form" className="hidden md:block bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold transition transform hover:scale-105">
            Start Training
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
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 animate-slideDown">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" className="block hover:text-red-500 transition">Services</a>
            <a href="#program" className="block hover:text-red-500 transition">Programs</a>
            <a href="#pricing" className="block hover:text-red-500 transition">Pricing</a>
            <a href="#contact" className="block hover:text-red-500 transition">Contact</a>
            <Link href="/Form" className="w-full bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-semibold transition block text-center">
              Start Training
            </Link >
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
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage}
          alt="Professional Trainer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="absolute inset-0 z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-red-500/20 backdrop-blur-sm border border-red-500/30 px-4 py-2 rounded-full text-red-400 font-semibold mb-6 animate-fadeIn">
            💪 Elite Personal Training
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slideInLeft">
            Transform Your Body
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
              With Elite Training.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
            MMA Fighter • CrossFit Trainer • Personal Trainer • Strength & Conditioning Coach
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft" style={{animationDelay: '0.4s'}}>
            <Link href="/Form" className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition group transform hover:scale-105">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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
      title: "MMA Training",
      description: "Professional MMA fighter training covering striking, grappling, and fight conditioning. Train with a real fighter.",
      delay: "0s"
    },
    {
      icon: "💪",
      title: "Strength & Conditioning",
      description: "Build strength, power, and endurance with scientifically-designed programs. Transform your athletic performance.",
      delay: "0.1s"
    },
    {
      icon: "🏋️",
      title: "CrossFit Training",
      description: "High-intensity functional fitness training. Improve your overall fitness with varied, challenging workouts.",
      delay: "0.2s"
    },
    {
      icon: "🎯",
      title: "Personal Training",
      description: "Customized one-on-one training programs tailored to your specific goals, fitness level, and lifestyle.",
      delay: "0.3s"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-zinc-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Training Services</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Professional coaching across multiple disciplines. From MMA to functional fitness, get expert guidance every step.
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
    <section id="Why" className="py-20 px-4 overflow-hidden relative" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={secbg}
          alt="Training Background"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="inline-block bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-400 font-semibold">
              ⚠️ The Problem
            </div>
            <h2 className="text-4xl font-bold">Training Without Expert Guidance</h2>
            <p className="text-zinc-400 text-lg">
              Generic workout plans won't give you real results. YouTube videos can't correct your form. 
              Training without proper coaching leads to plateaus, injuries, and wasted effort.
            </p>
            <p className="text-zinc-400 text-lg">
              Without a structured program and professional oversight, you'll struggle to stay motivated, 
              make progress, and achieve your fitness goals.
            </p>
          </div>

          <div className={` bg-black/60  p-8 rounded-2xl border border-red-500/30 space-y-6 transition-all duration-1000 backdrop-blur-sm ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`} style={{transitionDelay: '0.2s'}}>
            <div className="inline-block bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-400 font-semibold">
              ✅ The Solution
            </div>
            <h2 className="text-4xl font-bold">Professional Coaching</h2>
            <p className="text-zinc-300 text-lg">
              Train with a certified professional across multiple disciplines. Get personalized programs, 
              expert form corrections, and accountability that delivers real results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">Customized training programs for your specific goals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">Expert coaching from MMA, CrossFit, and S&C specialist</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-zinc-300">Nutrition guidance and lifestyle coaching included</span>
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
      text: "Flexible training schedules for all levels",
      delay: "0s"
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      text: "Multiple training disciplines in one place",
      delay: "0.1s"
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Goal-focused personalized programs",
      delay: "0.2s"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Nutrition and lifestyle coaching",
      delay: "0.3s"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Progress tracking and regular assessments",
      delay: "0.4s"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      text: "Train with a professional MMA fighter",
      delay: "0.5s"
    }
  ];

  return (
    <section id="program" className="py-20 px-4 bg-zinc-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Complete Training Programs</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From beginner to advanced. Whether you want to compete, get fit, or build strength, 
            we have a program designed for your success.
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

        <div className={`bg-gradient-to-r from-red-500 to-red-800 p-1 rounded-2xl max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`} style={{transitionDelay: '0.6s'}}>

        </div>
      </div>
    </section>
  );
};



// ============================================
// FOOTER SECTION
// ============================================
// ============================================
// PRICING SECTION
// ============================================
const PricingSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const plans = [
    {
      name: "1 MONTH PACKAGE",
      originalPrice: "1500 LE",
      price: "1000 LE",
      isPopular: false,
      features: [
        "Follow-up for 3 days on all inquiries through WhatsApp",
        "Training Program: A customized training program via videos",
        "Customized Nutrition Plan",
        "Nutritional Supplements: Recommendations and discounts on supplements (optional)",
        "Zoom Call: A video call at the beginning and end of the subscription",
        "Level Test (video): A test to measure your fitness level at the start of the program"
      ],
      delay: "0s"
    },
    {
      name: "3 MONTHS VIP",
      originalPrice: "10000 LE",
      price: "7000 LE",
      isPopular: true,
      features: [
        "Follow-up: Daily follow-up for all inquiries via WhatsApp",
        "Training Program: A customized training program via videos",
        "Nutrition Plan: The nutrition plan is updated every 15 days",
        "Nutritional Supplements: Recommendations and discounts on supplements (optional)",
        "Zoom Call: A video call at the beginning and end of the subscription",
        "Level Test (video): A test to measure your fitness level at the start of the program",
        "Subscription Freeze: An option to freeze your subscription for 2 months",
        "Zoom Meetings: 4 Zoom meetings during the month (30 minutes each)",
        "Workout With Coach: A live workout session with Ninga",
        "Preparing: Preparation for competitions and advanced training techniques"
      ],
      delay: "0.2s"
    },
    {
      name: "3 MONTHS PACKAGE",
      originalPrice: "4000 LE",
      price: "2500 LE",
      isPopular: false,
      features: [
        "Follow-up for 3 days on all inquiries through WhatsApp",
        "Training Program: A customized training program via videos",
        "Nutrition Plan: The nutrition plan is updated every 15 days",
        "Nutritional Supplements: Recommendations and discounts on supplements (optional)",
        "Zoom Call: A video call at the beginning and end of the subscription",
        "Level Test (video): A test to measure your fitness level at the start of the program",
        "Subscription Freeze: An option to freeze your subscription for 2 months"
      ],
      delay: "0.4s"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-zinc-900/50 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full text-red-400 font-semibold mb-4">
            💪 TRAINING PACKAGES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Training Plan</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Select the perfect package to start your transformation journey. All packages include personalized coaching.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${plan.isPopular ? 'lg:scale-110 lg:z-10' : ''}`}
              style={{transitionDelay: isVisible ? plan.delay : '0s'}}
            >


              {/* Card */}
              <div className={`relative rounded-3xl p-8 h-full flex flex-col ${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500 shadow-2xl shadow-red-500/20' 
                  : 'bg-zinc-800/50 border border-zinc-700 hover:border-red-500/50'
              } transition-all duration-300 group`}>
                {/* Plan Name */}
                <h3 className={`text-xl font-bold mb-4 ${plan.isPopular ? 'text-center' : ''}`}>
                  {plan.name}
                </h3>

                {/* Pricing */}
                <div className={`mb-6 ${plan.isPopular ? 'text-center' : ''}`}>
                  {plan.originalPrice && (
                    <p className="text-zinc-500 line-through text-lg mb-1">{plan.originalPrice}</p>
                  )}
                  <p className={`font-bold ${plan.isPopular ? 'text-5xl text-white' : 'text-4xl'}`}>
                    {plan.price}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.isPopular ? 'text-red-400' : 'text-red-500'
                      }`} />
                      <span className={`text-sm ${plan.isPopular ? 'text-zinc-200' : 'text-zinc-400'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href='/Form' className={`text-center w-full py-4 rounded-full font-bold text-lg transition-all duration-300 transform group-hover:scale-105 ${
                  plan.isPopular
                    ? 'bg-white text-black hover:bg-zinc-200 shadow-lg'
                    : 'bg-zinc-900 border-2 border-zinc-700 hover:border-red-500 hover:bg-zinc-800'
                }`}>
                  SUBSCRIBE NOW
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{transitionDelay: '0.6s'}}>

        </div>
      </div>
    </section>
  );
};

// ============================================
// PERSONAL TRAINING LOCATION SECTION
// ============================================
const PersonalTrainingSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const locations = [
    {
      icon: <Dumbbell className="w-12 h-12" />,
      title: "Train at a Gym",
      description: "Meet your coach at a fully-equipped gym with all the necessary equipment for comprehensive training sessions.",
      features: ["Professional Equipment", "Comfortable Environment", "Privacy Options"]
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Martial Arts Facility",
      description: "Train at a specialized martial arts center with MMA cages, mats, and striking equipment for authentic fight training.",
      features: ["MMA Cage & Mats", "Striking Equipment", "Sparring Area"]
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={secbgtwo}
          alt="Training Location"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} ref={ref}>
          <div className="inline-block bg-red-500/20 backdrop-blur-sm border border-red-500/30 px-4 py-2 rounded-full text-red-400 font-semibold mb-6">
            🥊 IN-PERSON TRAINING
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Train <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">One-To-One</span> With Your Coach
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Take your training to the next level with personalized, in-person coaching sessions. 
            Choose your preferred training location.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`bg-zinc-900/70 backdrop-blur-sm border border-zinc-700 rounded-3xl p-8 hover:border-red-500 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{transitionDelay: isVisible ? `${index * 0.2}s` : '0s'}}
            >
              {/* Icon */}
              <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform">
                {location.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">{location.title}</h3>

              {/* Description */}
              <p className="text-zinc-400 text-lg mb-6">{location.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {location.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className={`bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-3xl p-8 mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{transitionDelay: '0.4s'}}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-red-400 text-4xl font-bold mb-2">1-To-1</div>
              <p className="text-zinc-300">Personal Attention</p>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-4xl font-bold mb-2">100%</div>
              <p className="text-zinc-300">Customized Sessions</p>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-4xl font-bold mb-2">Expert</div>
              <p className="text-zinc-300">Professional Coaching</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{transitionDelay: '0.6s'}}>
          <Link href="/Form" className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-500/20">
            Book Your Session Now
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-zinc-400 mt-4">
            Fill out the form and we'll discuss the best location for your training goals
          </p>
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

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/share/1F1J6Yc9ZA/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/mahmoudninja97/',
      color: 'hover:text-pink-500'
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: 'http://tiktok.com/@mahmoud.erfan53',
      color: 'hover:text-white'
    }
  ];

  return (
    <footer id="contact" className="py-12 px-4 bg-zinc-900 border-t border-zinc-800" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-4 gap-8 mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold">NINGA <span className="text-red-500">TRAINING</span></span>
            </div>
            <p className="text-zinc-400">
              Professional coaching. Proven results. Transform your body and mind with expert guidance.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#services" className="hover:text-red-500 transition">MMA Training</a></li>
              <li><a href="#services" className="hover:text-red-500 transition">CrossFit</a></li>
              <li><a href="#services" className="hover:text-red-500 transition">Personal Training</a></li>
              <li><a href="#services" className="hover:text-red-500 transition">Strength & Conditioning</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>Phone: 01155013756</li>
              <li>WhatsApp Available</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-zinc-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-zinc-500 text-sm mt-4">
              Join our community and stay updated! 💪
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500">
          <p>&copy; 2025 NINGA Training. All rights reserved. Train Hard. Get Results.</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function NINGAMMALanding() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <SplashScreen />}
      
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
        <PricingSection />
        <PersonalTrainingSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}