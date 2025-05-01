
import React from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the project data structure
interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: 'crime-unsolved',
    title: 'Unsolved: The Missing Files',
    category: 'True Crime',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    videoUrl: '#',
    description: 'A six-part investigative series exploring cold cases and the families left behind',
  },
  {
    id: 'story-refugee',
    title: 'Displaced: Stories from the Border',
    category: 'Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    videoUrl: '#',
    description: 'An award-winning documentary following three refugee families seeking asylum',
  },
  {
    id: 'streaming-live',
    title: 'LIVE: Inside the Game',
    category: 'Streaming',
    thumbnail: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    videoUrl: '#',
    description: 'Behind the scenes with professional eSports players during world championships',
  },
  {
    id: 'nature-documentary',
    title: 'Wilderness: The Forgotten Coast',
    category: 'Documentary',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    videoUrl: '#',
    description: 'Environmental documentary on coastline conservation and climate impact',
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="section bg-filmmaker-dark">
      <div className="section-inner">
        <div className="mb-12">
          <h2 className="text-accent-gradient font-bold text-lg mb-2">MY WORK</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Featured Projects</h3>
          <p className="text-gray-300 max-w-2xl">
            A selection of my recent documentary and storytelling work, each crafted to captivate, inform, and inspire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "video-card group",
                index % 2 === 0 ? "animate-fade-in-right" : "animate-fade-in-left"
              )}
              style={{animationDelay: `${0.2 * index}s`, animationFillMode: 'both'}}
            >
              <div className="video-container h-72 lg:h-80 relative">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-filmmaker-accent font-medium text-sm mb-2">{project.category}</span>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <a 
                    href={project.videoUrl} 
                    className="flex items-center gap-2 w-fit px-4 py-2 bg-filmmaker-accent/90 text-white rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Play size={16} /> Watch Trailer
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 transition-all duration-300 hover:border-filmmaker-accent hover:bg-white/10"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
