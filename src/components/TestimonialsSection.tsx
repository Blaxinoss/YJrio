
import { cn } from '@/lib/utils';
import { Star, User } from 'lucide-react';


interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  image?: string;
}

// Sample testimonials
const testimonials: Testimonial[] = [

  {
    id: 'testimonial-2',
    quote: "Yousef will make your visual thoughts a reality.",
    name: "Paul Tse",
    title: "Events Director",
    company: "TechStream Conference",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 'testimonial-1',
    quote: "Very, very pleased by his skills and his politeness, he is always available to make changes to make customers happy. Great editing!",
    name: "Federico Friscina",
    title: "Lead Investigator",
    company: "Metropolitan Police",
    // image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 'testimonial-3',
    quote: "Really good Editor. Was willing to follow all the instructions and gave me a video according to my expectations. Will definitely recommend",
    name: "Gideon Osagunwenwan",
    title: "Executive Director",
    company: "Coastal Conservation Alliance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section bg-black">
      <div className="section-inner">
        <div className="text-center mb-16">
          <h2 className="text-accent-gradient font-bold text-lg mb-2">TESTIMONIALS</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Client Feedback</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            What clients and collaborators have to say about working together on documentary and streaming projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "testimonial-card animate-scale-up flex flex-col",
                index === 1 ? "md:-mt-8" : ""
              )}
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'both' }}
            >
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.667 18.6667C12.8761 18.6667 14.6667 16.8761 14.6667 14.6667C14.6667 12.4572 12.8761 10.6667 10.667 10.6667C8.45755 10.6667 6.66699 12.4572 6.66699 14.6667C6.66699 16.8761 8.45755 18.6667 10.667 18.6667Z" fill="#8B5CF6" />
                  <path d="M21.333 18.6667C23.5425 18.6667 25.333 16.8761 25.333 14.6667C25.333 12.4572 23.5425 10.6667 21.333 10.6667C19.1236 10.6667 17.333 12.4572 17.333 14.6667C17.333 16.8761 19.1236 18.6667 21.333 18.6667Z" fill="#8B5CF6" />
                  <path d="M10.6668 21.3333C7.72814 21.3333 5.3335 23.728 5.3335 26.6667V28H16.0002V26.6667C16.0002 23.728 13.6055 21.3333 10.6668 21.3333Z" fill="#8B5CF6" />
                  <path d="M21.3332 21.3333C18.3945 21.3333 15.9998 23.728 15.9998 26.6667V28H26.6665V26.6667C26.6665 23.728 24.2718 21.3333 21.3332 21.3333Z" fill="#8B5CF6" />
                </svg>
              </div>

              <p className="text-white mb-6 flex-grow text-xl">{testimonial.quote}</p>

              <div className="flex items-center gap-3">

                <div className="flex items-center gap-3">

                  <User
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover text-[#8B5CF6]  " />
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>

                    <div className="flex mt-1">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
