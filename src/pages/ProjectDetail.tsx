
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';

// Mock project detail data
const projectDetails = {
  'research-dashboard': {
    title: 'Academic Research Dashboard',
    description: 'Interactive visualization platform for analyzing research trends and citation networks',
    fullDescription: `
      <p>The Academic Research Dashboard is a comprehensive platform designed to help researchers visualize and analyze trends in academic literature. Built with modern web technologies, it provides interactive charts, network graphs, and statistical analyses to uncover patterns in research data.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Interactive citation network visualization using D3.js</li>
        <li>Real-time trend analysis across multiple disciplines</li>
        <li>Collaborative annotation and sharing capabilities</li>
        <li>Integration with major academic databases</li>
        <li>Export functionality for presentations and publications</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The dashboard leverages React for the user interface, with D3.js handling complex data visualizations. The backend is built with Python and Flask, connecting to multiple academic APIs and databases. The system uses machine learning algorithms to identify emerging research trends and suggest relevant connections between papers.</p>
      
      <h2>Impact and Usage</h2>
      <p>Since its launch, the dashboard has been used by over 500 researchers across 50 institutions. It has facilitated new collaborations and helped identify gaps in current research. The tool has been particularly valuable for literature reviews and grant proposal preparation.</p>
    `,
    tags: ['React', 'D3.js', 'Python', 'Data Visualization'],
    year: '2024',
    status: 'Active',
    githubUrl: 'https://github.com/example/research-dashboard',
    liveUrl: 'https://research-dashboard.example.com',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg']
  },
  // Add other project details as needed...
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectDetails[slug as keyof typeof projectDetails] : null;

  if (!project) {
    return (
      <div className="min-h-screen py-20 px-6 lg:px-8 bg-beige-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl font-bold text-bordeaux-900 mb-4">
            Project Not Found
          </h1>
          <Link to="/projects" className="elegant-link font-cormorant text-lg">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

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
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 elegant-link font-cormorant text-lg"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 animate-fade-in-up">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bordeaux-900 leading-tight">
              {project.title}
            </h1>
            <span className={`px-4 py-2 rounded-full font-cormorant ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-bordeaux-600">
            <div className="flex items-center gap-1">
              <Calendar size={18} />
              <span className="font-cormorant text-lg">{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} />
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="bg-bordeaux-100 text-bordeaux-700 px-3 py-1 rounded-full font-cormorant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bordeaux-900 text-beige-50 px-6 py-3 rounded-lg font-cormorant hover:bg-bordeaux-800 transition-colors duration-300"
              >
                <Github size={20} />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-bordeaux-900 text-bordeaux-900 px-6 py-3 rounded-lg font-cormorant hover:bg-bordeaux-900 hover:text-beige-50 transition-all duration-300"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>
        </header>

        {/* Project Images */}
        {project.images && (
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div 
                  key={index}
                  className="h-48 bg-gradient-to-br from-bordeaux-100 to-bordeaux-200 rounded-xl overflow-hidden"
                >
                  <div className="w-full h-full bg-bordeaux-900/10"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
          dangerouslySetInnerHTML={{ __html: project.fullDescription }}
        />

        <style jsx>{`
          .prose {
            font-family: 'Cormorant Garamond', serif;
            color: #581f27;
            line-height: 1.8;
          }
          .prose h2 {
            font-family: 'Playfair Display', serif;
            color: #581f27;
            font-size: 2rem;
            font-weight: 600;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
          }
          .prose p {
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
          }
          .prose ul {
            margin-bottom: 1.5rem;
          }
          .prose li {
            margin-bottom: 0.5rem;
            font-size: 1.125rem;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProjectDetail;
