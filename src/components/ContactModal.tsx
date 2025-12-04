import React from 'react';
import { useContact } from '../context/ContactContext';

const ContactModal = () => {
  const { isContactOpen, closeContact } = useContact();

  if (!isContactOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1a1a22] border border-[#2a2a35] rounded-xl w-full max-w-lg shadow-2xl relative overflow-hidden">
        {/* Close Button */}
        <button 
          onClick={closeContact}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Fill out the form below and our team will get back to you shortly.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-[#22222a] border border-[#2a2a35] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e4b2b3] transition"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
              <input 
                type="tel" 
                className="w-full bg-[#22222a] border border-[#2a2a35] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e4b2b3] transition"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
              <input 
                type="text" 
                className="w-full bg-[#22222a] border border-[#2a2a35] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e4b2b3] transition"
                placeholder="123 Innovation Dr, Tech City"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-[#22222a] border border-[#2a2a35] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e4b2b3] transition resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit"
              style={{ backgroundColor: '#e4b2b3' }}
              className="w-full h-12 text-[#1a1a22] font-bold py-3 rounded-lg hover:brightness-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
