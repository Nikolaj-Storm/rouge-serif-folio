
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-beige-100 border-t border-beige-200 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-lg font-semibold text-bordeaux-900 mb-2">
              Get in Touch
            </h3>
            <p className="text-bordeaux-700 font-cormorant">
              Connect with me for collaborations and technical discussions
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:contact@nathanstorm.dev" 
              className="text-bordeaux-600 hover:text-bordeaux-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/nstorm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-bordeaux-600 hover:text-bordeaux-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nstorm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-bordeaux-600 hover:text-bordeaux-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-beige-200 text-center">
          <p className="text-bordeaux-600 font-cormorant text-sm">
            © 2024 Nathan Storm. Crafted with care and attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
};
