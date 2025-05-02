
import { ArrowDown, Play } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
          <h2 className="text-filmmaker-accent font-medium mb-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>Professional Video Editor</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight animate-fade-in" style={{ animationDelay: '0.5s' }}>
            I am Yousef Moustafa
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-xl animate-fade-in font-bold" style={{ animationDelay: '0.7s' }}>
            I’m Youssef, a professional video editor dedicated to delivering high-quality work. I’m fast, reliable, and a great communicator. I thrive on collaboration and always meet deadlines.

            Ready to Transform Your Videos?
            Feel free to reach out with any questions. Let’s get started and take your content to the next level!
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
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
        <div className="flex items-center space-x-4 absolute left-1/2 top-[83%] -translate-x-[44%]">
          {/* Twitter */}
          <a
            href="https://x.com/YousefJiro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-14 h-14  rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-filmmaker-accent hover:border-filmmaker-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>

          {/* Upwork */}
          <a
            href="https://www.upwork.com/freelancers/~019966e7f74ab94ccd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-700 hover:border-filmmaker-accent transition-colors overflow-hidden"
          >
            <img
              src="/up.png"
              alt="Upwork"
              className="w-24 h-24 object-contain "
            />
          </a>

          {/* Discord (jiro.xyz) */}
          <a
            href="https://jiro.xyz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord (via Jiro.xyz)"
            className="w-14 h-14  rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-filmmaker-accent hover:border-filmmaker-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
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
