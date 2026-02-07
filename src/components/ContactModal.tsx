import { useContact } from '../context/ContactContext';
import { useState, useEffect } from 'react';
const ContactModal = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { isContactOpen, closeContact } = useContact();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isContactOpen) {
      setIsSubmitted(false);
    }
  }, [isContactOpen]);

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }
  if (!isContactOpen) return null;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/contact-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({
        email: '',
        phone: '',
        address: '',
        message: ''
      });
      setIsSubmitted(true);
    } else {
      alert('Failed to send message. Please try again later.');
    }
  }
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
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400 mb-6">
                Your message has been sent. We will reply within 1-2 working days.
              </p>
              <button
                onClick={closeContact}
                className="px-6 py-2 bg-[#e4b2b3] text-[#1a1a22] font-bold rounded-lg hover:brightness-90 transition"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-2 text-white">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and our team will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    name='email'
                    type="email"
                    className="w-full bg-[#22222a] border border-[#2a2a35] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e4b2b3] transition"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    className="w-full bg-[#22222a] border border-[#2a2a35] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e4b2b3] transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
                  <input
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-[#22222a] border border-[#2a2a35] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#e4b2b3] transition"
                    placeholder="123 Innovation Dr, Tech City"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
