
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Play } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Mute the video when it loads
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background video with dark overlay */}
      <div className="absolute inset-0">
        {/* A dummy background video - in a real site you'd use a real showreel */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-filmmaker-focuses-his-camera-lens-33613-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-filmmaker-dark to-black/70"></div>
      </div>

      {/* Hero content */}
      <div className="relative h-full container flex flex-col justify-center items-start">
        <div className="max-w-3xl animate-fade-in">
          <h2 className="text-filmmaker-accent font-medium mb-2 animate-fade-in" style={{animationDelay: '0.3s'}}>DOCUMENTARY FILMMAKER & STORYTELLER</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight animate-fade-in" style={{animationDelay: '0.5s'}}>
            Capturing Stories That<br />Matter
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-xl animate-fade-in" style={{animationDelay: '0.7s'}}>
            Award-winning documentary filmmaker specializing in true crime, human interest stories, and immersive narrative experiences.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <a 
              href="#work" 
              className="px-6 py-3 bg-filmmaker-accent text-white font-medium rounded-full transition-all duration-300 hover:shadow-glow hover:bg-filmmaker-accent/90 flex items-center gap-2"
            >
              View My Work <Play size={16} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 transition-all duration-300 hover:border-white/70 hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#work" className="text-white/70 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
