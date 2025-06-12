
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

// Mock project data
const projects = [
  {
    slug: 'research-dashboard',
    title: 'Academic Research Dashboard',
    description: 'Interactive visualization platform for analyzing research trends and citation networks',
    image: '/placeholder.svg',
    tags: ['React', 'D3.js', 'Python', 'Data Visualization'],
    year: '2024',
    status: 'Active'
  },
  {
    slug: 'citation-analyzer',
    title: 'Citation Network Analyzer',
    description: 'Tool for mapping and analyzing academic citation patterns across disciplines',
    image: '/placeholder.svg',
    tags: ['Python', 'Neo4j', 'NetworkX', 'Streamlit'],
    year: '2023',
    status: 'Completed'
  },
  {
    slug: 'conference-companion',
    title: 'Academic Conference Companion',
    description: 'Mobile app for navigating academic conferences with scheduling and networking features',
    image: '/placeholder.svg',
    tags: ['React Native', 'Firebase', 'Node.js'],
    year: '2023',
    status: 'In Development'
  },
  {
    slug: 'literature-mapper',
    title: 'Literature Review Mapper',
    description: 'Automated tool for organizing and visualizing literature review findings',
    image: '/placeholder.svg',
    tags: ['Python', 'NLP', 'Vue.js', 'PostgreSQL'],
    year: '2022',
    status: 'Completed'
  },
  {
    slug: 'peer-review-system',
    title: 'Transparent Peer Review System',
    description: 'Blockchain-based system for transparent and accountable academic peer review',
    image: '/placeholder.svg',
    tags: ['Solidity', 'Web3', 'React', 'IPFS'],
    year: '2022',
    status: 'Research Phase'
  },
  {
    slug: 'data-ethics-toolkit',
    title: 'Data Ethics Toolkit',
    description: 'Interactive educational platform for teaching data ethics in research',
    image: '/placeholder.svg',
    tags: ['Svelte', 'TypeScript', 'Educational Technology'],
    year: '2021',
    status: 'Completed'
  }
];

const Projects = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800';
      case 'Research Phase':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-8 bg-beige-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl font-bold text-bordeaux-900 mb-6">
            Projects & Innovations
          </h1>
          <p className="text-xl text-bordeaux-700 font-cormorant leading-relaxed max-w-3xl mx-auto">
            Explore my portfolio of digital projects, research tools, and creative endeavors 
            that bridge technology and academia.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.slug}
              className="bg-beige-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-bordeaux-100 to-bordeaux-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-bordeaux-900/10 group-hover:bg-bordeaux-900/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-cormorant ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-bordeaux-900 group-hover:text-bordeaux-700 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-bordeaux-600 font-cormorant text-sm">
                    {project.year}
                  </span>
                </div>

                <p className="text-bordeaux-700 font-cormorant mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-bordeaux-50 text-bordeaux-700 px-2 py-1 rounded text-xs font-cormorant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Link 
                    to={`/projects/${project.slug}`}
                    className="flex-1 bg-bordeaux-900 text-beige-50 px-4 py-2 rounded-lg text-center font-cormorant hover:bg-bordeaux-800 transition-colors duration-300"
                  >
                    View Details
                  </Link>
                  <button className="p-2 border border-bordeaux-300 rounded-lg text-bordeaux-700 hover:bg-bordeaux-50 transition-colors duration-300">
                    <Github size={18} />
                  </button>
                  <button className="p-2 border border-bordeaux-300 rounded-lg text-bordeaux-700 hover:bg-bordeaux-50 transition-colors duration-300">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-beige-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="font-playfair text-2xl font-semibold text-bordeaux-900 mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-bordeaux-700 font-cormorant mb-6 leading-relaxed">
              I'm always excited to explore new projects and collaborate with fellow researchers 
              and innovators. Let's create something meaningful together.
            </p>
            <a 
              href="mailto:contact@example.com"
              className="bg-bordeaux-900 text-beige-50 px-8 py-3 rounded-lg font-cormorant text-lg hover:bg-bordeaux-800 transition-colors duration-300 inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
