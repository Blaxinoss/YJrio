
import { useToast } from "@/components/ui/use-toast";
import React, { useState } from 'react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, you would send this data to your backend or an email service
    console.log('Form submitted:', formData);

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      project: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section bg-filmmaker-dark">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h2 className="text-accent-gradient font-bold text-lg mb-2">GET IN TOUCH</h2>
            <h3 className="text-4xl font-bold text-white mb-4">Let's Work Together</h3>
            <p className="text-gray-300 mb-8">
              Have a Documentary Idea or Need Expert Video Editing Services?
              Fill out the form, and I’ll get back to you to discuss how we can bring your vision to life.
            </p>


            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-filmmaker-accent/20 text-filmmaker-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call Me</p>
                  <p className="text-white font-medium">+20 109 294 6646</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-filmmaker-accent/20 text-filmmaker-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Me</p>
                  <p className="text-white font-medium">yousefjiro30@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-filmmaker-accent/20 text-filmmaker-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {/* Social media icons */}
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-filmmaker-accent hover:border-filmmaker-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-filmmaker-accent hover:border-filmmaker-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-filmmaker-accent hover:border-filmmaker-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:text-filmmaker-accent hover:border-filmmaker-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="glass rounded-xl p-8 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-filmmaker-accent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-filmmaker-accent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm mb-2" htmlFor="project">Project Type</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="bg-gray-800  border-gray-600 p-2 rounded-md bg-white/10 border border-white/20 px-4 py-3 w-full text-white focus:outline-none focus:ring-2 focus:ring-filmmaker-accent"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="Documentary">Documentary Film</option>
                  <option value="Crime Series">True Crime Series</option>
                  <option value="Livestream">Livestream Production</option>
                  <option value="Storytelling">Narrative Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm mb-2" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 w-full text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-filmmaker-accent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-filmmaker-accent text-white font-medium rounded-lg transition-all duration-300 hover:shadow-glow hover:bg-filmmaker-accent/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
