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
        <h1 className="text-6xl font-bold mb-4">
          GET IN <span className="text-[#00FF94]">TOUCH</span>
        </h1>
        <p className="text-xl mb-12 text-gray-400">
          Always open to interesting conversations—whether casual or professional
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-8 bg-[#151515] border-2 border-[#252525] rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-[#252525] rounded-lg text-white focus:border-[#00FF94] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border-2 border-[#252525] rounded-lg text-white focus:border-[#00FF94] outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black border-2 border-[#252525] rounded-lg text-white focus:border-[#00FF94] outline-none transition-colors"
                  placeholder="What would you like to talk about?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#00FF94] text-black font-semibold hover:bg-white transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Links */}
          <div className="space-y-6">
            <div className="p-8 bg-[#151515] border-2 border-[#252525] rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              
              <div className="space-y-4">
                <a
                  href="https://linkedin.com/in/shrey-mittal-101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#252525] hover:bg-[#333] rounded-lg transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Linkedin size={24} className="text-[#00FF94]" />
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-gray-400">Best way to reach me professionally</div>
                  </div>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#252525] hover:bg-[#333] rounded-lg transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Instagram size={24} className="text-[#00FF94]" />
                  <div>
                    <div className="font-semibold">Instagram</div>
                    <div className="text-sm text-gray-400">Active in chats, rarely post</div>
                  </div>
                </a>

                <a
                  href="mailto:shrey@merantix.com"
                  className="flex items-center gap-4 p-4 bg-[#252525] hover:bg-[#333] rounded-lg transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Mail size={24} className="text-[#00FF94]" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-gray-400">For formal inquiries</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 bg-[#151515] border-2 border-[#252525] rounded-lg">
              <p className="text-gray-400">
                Whether you want to chat about tech, discuss potential collaborations, or just talk about the latest badminton tournament—I'm all ears!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
