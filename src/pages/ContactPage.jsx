import React, { useState } from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function ContactPage({ setIsHovering }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! (Form submission to be implemented)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page-enter min-h-screen px-8 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          GET IN <span className="text-[#00FF94]">TOUCH</span>
        </h1>
        <p className="text-xl mb-12 text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Always open to interesting conversations—whether casual or professional
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-8 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-black/50 border border-white/20 rounded-lg text-white focus:border-[#00FF94] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-black/50 border border-white/20 rounded-lg text-white focus:border-[#00FF94] outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 backdrop-blur-sm bg-black/50 border border-white/20 rounded-lg text-white focus:border-[#00FF94] outline-none transition-colors"
                  placeholder="What would you like to talk about?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#00FF94] text-black font-semibold hover:bg-white transition-colors shadow-lg"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Links */}
          <div className="space-y-6">
            <div className="p-8 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Connect With Me</h2>
              
              <div className="space-y-4">
                <a
                  href="https://linkedin.com/in/shrey-mittal-101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Linkedin size={24} className="text-[#00FF94]" />
                  <div>
                    <div className="font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">LinkedIn</div>
                    <div className="text-sm text-white/70">Best way to reach me professionally</div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/shreymittal1000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Instagram size={24} className="text-[#00FF94]" />
                  <div>
                    <div className="font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Instagram</div>
                    <div className="text-sm text-white/70">Active in chats, rarely post</div>
                  </div>
                </a>

                <a
                  href="mailto:shrey@merantix.com"
                  className="flex items-center gap-4 p-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Mail size={24} className="text-[#00FF94]" />
                  <div>
                    <div className="font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Email</div>
                    <div className="text-sm text-white/70">For formal inquiries</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg">
              <p className="text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Whether you want to chat about tech, discuss potential collaborations, or just talk about the latest badminton tournament—I'm all ears!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
