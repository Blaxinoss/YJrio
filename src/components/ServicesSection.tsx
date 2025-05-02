
import { Book, Film, MessageSquare, Video } from 'lucide-react';

const services = [
  {
    icon: <Film className="text-filmmaker-accent" size={48} />,
    title: 'Documentary Film',
    description: 'Full-length and series documentaries with cinematic quality and journalistic integrity.'
  },
  {
    icon: <Video className="text-filmmaker-accent" size={48} />,
    title: 'Live Stream Production',
    description: 'Professional multi-camera live stream setups for events, interviews, and real-time storytelling.'
  },
  {
    icon: <MessageSquare className="text-filmmaker-accent" size={48} />,
    title: 'Narrative Development',
    description: 'Story consultation and development for compelling, ethical storytelling across mediums.'
  },
  {
    icon: <Book className="text-filmmaker-accent" size={48} />,
    title: 'True Crime Research',
    description: 'In-depth journalistic investigation and ethical reporting for true crime projects.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section bg-gradient-to-b from-black to-filmmaker-dark">
      <div className="section-inner">
        <div className="text-center mb-16">
          <h2 className="text-accent-gradient font-bold text-lg mb-2">SERVICES</h2>
          <h3 className="text-4xl font-bold text-white mb-4">My Expertise</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Video Editor Specializing in Documentary & Streaming | Storytelling & Technical Precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card flex space-x-2 items-center"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'both' }}
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
            </div>
          ))}
        </div>

        <div className="glass p-8 rounded-xl mt-16 mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-white mb-4">Ready to bring your story to life?</h4>
              <p className="text-gray-300">Let's collaborate on your next documentary project or streaming production.</p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-filmmaker-accent text-white font-medium rounded-full transition-all duration-300 hover:shadow-glow hover:bg-filmmaker-accent/90"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
