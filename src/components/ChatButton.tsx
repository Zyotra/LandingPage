import React from 'react';
import { useContact } from '../context/ContactContext';

const ChatButton = () => {
    const { openContact } = useContact();

    return (
        <button
            onClick={openContact}
            style={{ backgroundColor: '#e4b2b3' }}
            className="fixed bottom-8 right-8 z-40 text-[#1a1a22] p-4 rounded-full shadow-lg hover:brightness-90 hover:scale-110 transition-all duration-300 group"
            aria-label="Contact Support"
        >
            <div className="relative">
                        <svg 
          className="w-8 h-8" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97c1.31.61 2.75.97 4.29.97 5.52 0 10-4.48 10-10S17.52 2 12 2zM8 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
            </div>
        </button>
    );
};

export default ChatButton;
