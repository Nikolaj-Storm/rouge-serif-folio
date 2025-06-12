
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, BookOpen, Code, GraduationCap } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-beige-50 to-beige-100">
        <div className="absolute inset-0 opacity-5">
          <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-bordeaux-200 rounded-full"></div>
          <div className="floating-element absolute bottom-20 right-10 w-24 h-24 bg-bordeaux-300 rounded-full" style={{ animationDelay: '2s' }}></div>
          <div className="floating-element absolute top-1/2 right-1/4 w-16 h-16 bg-bordeaux-400 rounded-full" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-bordeaux-900 mb-6 leading-tight">
            Nikolaj Storm
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-bordeaux-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            text
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/papers" 
              className="bg-bordeaux-900 text-beige-50 px-8 py-3 rounded-lg font-cormorant text-lg hover:bg-bordeaux-800 transition-all duration-300 transform hover:scale-105"
            >
              View Research
            </Link>
            <Link 
              to="/projects" 
              className="border-2 border-bordeaux-900 text-bordeaux-900 px-8 py-3 rounded-lg font-cormorant text-lg hover:bg-bordeaux-900 hover:text-beige-50 transition-all duration-300"
            >
              Explore Projects
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-bordeaux-600" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 lg:px-8 bg-beige-50">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-section">
            <h2 className="font-playfair text-4xl font-semibold text-bordeaux-900 mb-8 text-center">
              Welcome to My Digital Journey
            </h2>
            <div className="prose prose-lg mx-auto text-bordeaux-800 font-cormorant leading-relaxed">
              <p className="text-xl mb-6">
                I am a passionate software engineer dedicated to advancing technology through innovative 
                solutions and rigorous engineering practices. My work spans web development, cloud architecture, 
                and digital transformation, always seeking to bridge technical excellence with practical applications.
              </p>
              <p className="text-lg">
                Through this digital space, I share my technical insights, creative projects, and 
                thoughts on the evolving landscape of software engineering and technology. Join me in exploring 
                ideas that shape our digital future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 px-6 lg:px-8 bg-beige-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-in-section text-center group">
              <div className="w-16 h-16 bg-bordeaux-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen size={24} className="text-beige-50" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-bordeaux-900 mb-4">
                Latest Insights
              </h3>
              <p className="text-bordeaux-700 font-cormorant mb-6 leading-relaxed">
                Discover my latest blog posts covering software engineering insights, tech industry trends, 
                and reflections on digital innovation.
              </p>
              <Link 
                to="/blog" 
                className="elegant-link font-cormorant text-lg font-medium"
              >
                Read Blog →
              </Link>
            </div>

            <div className="fade-in-section text-center group" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-bordeaux-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code size={24} className="text-beige-50" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-bordeaux-900 mb-4">
                Technical Projects
              </h3>
              <p className="text-bordeaux-700 font-cormorant mb-6 leading-relaxed">
                Explore my portfolio of software projects, technical tools, 
                and innovative solutions that bridge technology and user experience.
              </p>
              <Link 
                to="/projects" 
                className="elegant-link font-cormorant text-lg font-medium"
              >
                View Projects →
              </Link>
            </div>

            <div className="fade-in-section text-center group" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-bordeaux-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={24} className="text-beige-50" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-bordeaux-900 mb-4">
                Research & Writing
              </h3>
              <p className="text-bordeaux-700 font-cormorant mb-6 leading-relaxed">
                Access my technical publications, conference talks, 
                and contributions to the software engineering community.
              </p>
              <Link 
                to="/papers" 
                className="elegant-link font-cormorant text-lg font-medium"
              >
                Browse Papers →
              </Link>
            </div>
          </div>
        </div>
      </div>
     </section> {/* ✅ properly closing the section */}
   </div>
  );
};


export default Index;
