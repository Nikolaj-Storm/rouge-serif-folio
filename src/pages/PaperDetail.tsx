
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen, ExternalLink, Copy,Users } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

// Mock paper detail data
const paperDetails = {
  'digital-transformation-academia': {
    title: 'Digital Transformation in Academic Research: A Comprehensive Analysis',
    year: '2024',
    venue: 'Journal of Academic Innovation',
    type: 'Journal Article',
    authors: ['Nathan Storm', 'Dr. Jane Researcher'],
    abstract: 'This paper examines the impact of digital technologies on academic research methodologies and collaboration patterns across multiple disciplines. Through a comprehensive analysis of 500+ research projects, we identify key trends and challenges in the digital transformation of academia.',
    fullContent: `
      <h2>Introduction</h2>
      <p>The digital revolution has fundamentally transformed how academic research is conducted, shared, and validated. This comprehensive analysis examines the multifaceted impact of digital technologies on research methodologies, collaboration patterns, and knowledge dissemination across various academic disciplines.</p>
      
      <h2>Methodology</h2>
      <p>Our study employed a mixed-methods approach, combining quantitative analysis of research output data with qualitative interviews with 150 researchers across 25 institutions. We analyzed publication patterns, collaboration networks, and technology adoption rates over a 10-year period (2014-2024).</p>
      
      <h2>Key Findings</h2>
      <p>Our analysis reveals several significant trends in the digital transformation of academic research:</p>
      <ul>
        <li>A 300% increase in international collaboration since 2014</li>
        <li>Widespread adoption of cloud-based research tools (78% of surveyed researchers)</li>
        <li>Significant improvement in research reproducibility through digital documentation</li>
        <li>Emergence of new research methodologies enabled by big data and AI</li>
      </ul>
      
      <h2>Digital Collaboration Patterns</h2>
      <p>The study identifies a fundamental shift in how researchers collaborate. Digital platforms have enabled real-time collaboration across geographical boundaries, leading to more diverse research teams and interdisciplinary projects. However, this transformation has also introduced new challenges related to data security, intellectual property, and digital literacy.</p>
      
      <h2>Implications for Future Research</h2>
      <p>The findings suggest that institutions must invest in digital infrastructure and researcher training to remain competitive. We recommend the development of standardized protocols for digital research collaboration and the establishment of digital ethics guidelines.</p>
      
      <h2>Conclusion</h2>
      <p>Digital transformation in academia is not merely a technological upgrade but a fundamental reimagining of how knowledge is created, validated, and shared. While challenges remain, the benefits of digital integration in research are substantial and will continue to drive innovation in academic practice.</p>
    `,
    doi: '10.1000/journal.2024.001',
    citation: 'Storm, N., & Researcher, J. (2024). Digital transformation in academic research: A comprehensive analysis. Journal of Academic Innovation, 15(2), 123-145. https://doi.org/10.1000/journal.2024.001',
    pdfUrl: '/placeholder.pdf',
    externalUrl: 'https://example-journal.com/articles/digital-transformation'
  },
  // Add other paper details as needed...
};

const PaperDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const paper = slug ? paperDetails[slug as keyof typeof paperDetails] : null;
  const [activeTab, setActiveTab] = useState<'abstract' | 'full' | 'citation'>('abstract');

  if (!paper) {
    return (
      <div className="min-h-screen py-20 px-6 lg:px-8 bg-beige-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl font-bold text-bordeaux-900 mb-4">
            Paper Not Found
          </h1>
          <Link to="/papers" className="elegant-link font-cormorant text-lg">
            ← Back to Papers
          </Link>
        </div>
      </div>
    );
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Citation copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy citation');
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-8 bg-beige-50">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Link 
            to="/papers" 
            className="inline-flex items-center gap-2 elegant-link font-cormorant text-lg"
          >
            <ArrowLeft size={20} />
            Back to Papers
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 animate-fade-in-up">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bordeaux-900 mb-6 leading-tight">
            {paper.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-bordeaux-600">
            <div className="flex items-center gap-1">
              <Calendar size={18} />
              <span className="font-cormorant text-lg">{paper.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen size={18} />
              <span className="font-cormorant text-lg">{paper.venue}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={18} />
              <span className="font-cormorant text-lg">{paper.authors.length} Authors</span>
            </div>
          </div>

          <div className="bg-bordeaux-100 text-bordeaux-700 p-4 rounded-lg mb-6">
            <p className="font-cormorant">
              <strong>Authors:</strong> {paper.authors.join(', ')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {paper.pdfUrl && (
              <a 
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bordeaux-900 text-beige-50 px-6 py-3 rounded-lg font-cormorant hover:bg-bordeaux-800 transition-colors duration-300"
              >
                Download PDF
              </a>
            )}
            {paper.doi && (
              <a 
                href={`https://doi.org/${paper.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-bordeaux-900 text-bordeaux-900 px-6 py-3 rounded-lg font-cormorant hover:bg-bordeaux-900 hover:text-beige-50 transition-all duration-300"
              >
                <ExternalLink size={20} />
                View on Publisher
              </a>
            )}
            <button
              onClick={() => copyToClipboard(paper.citation)}
              className="inline-flex items-center gap-2 bg-beige-200 text-bordeaux-900 px-6 py-3 rounded-lg font-cormorant hover:bg-beige-300 transition-colors duration-300"
            >
              <Copy size={20} />
              Copy Citation
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex gap-1 bg-beige-200 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('abstract')}
              className={`flex-1 py-3 px-4 rounded-md font-cormorant transition-all duration-300 ${
                activeTab === 'abstract'
                  ? 'bg-beige-50 text-bordeaux-900 shadow-sm'
                  : 'text-bordeaux-700 hover:text-bordeaux-900'
              }`}
            >
              Abstract
            </button>
            <button
              onClick={() => setActiveTab('full')}
              className={`flex-1 py-3 px-4 rounded-md font-cormorant transition-all duration-300 ${
                activeTab === 'full'
                  ? 'bg-beige-50 text-bordeaux-900 shadow-sm'
                  : 'text-bordeaux-700 hover:text-bordeaux-900'
              }`}
            >
              Full Text
            </button>
            <button
              onClick={() => setActiveTab('citation')}
              className={`flex-1 py-3 px-4 rounded-md font-cormorant transition-all duration-300 ${
                activeTab === 'citation'
                  ? 'bg-beige-50 text-bordeaux-900 shadow-sm'
                  : 'text-bordeaux-700 hover:text-bordeaux-900'
              }`}
            >
              Citation
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {activeTab === 'abstract' && (
            <div className="bg-beige-100 rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-semibold text-bordeaux-900 mb-6">
                Abstract
              </h2>
              <p className="text-bordeaux-700 font-cormorant text-lg leading-relaxed">
                {paper.abstract}
              </p>
            </div>
          )}

          {activeTab === 'full' && (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: paper.fullContent }}
            />
          )}

          {activeTab === 'citation' && (
            <div className="bg-beige-100 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-playfair text-2xl font-semibold text-bordeaux-900">
                  APA Citation (7th Edition)
                </h2>
                <button
                  onClick={() => copyToClipboard(paper.citation)}
                  className="inline-flex items-center gap-2 bg-bordeaux-900 text-beige-50 px-4 py-2 rounded-lg font-cormorant hover:bg-bordeaux-800 transition-colors duration-300"
                >
                  <Copy size={18} />
                  Copy Reference
                </button>
              </div>
              <div className="bg-beige-200 p-6 rounded-lg">
                <p className="text-bordeaux-800 font-cormorant text-lg leading-relaxed">
                  {paper.citation}
                </p>
              </div>
              {paper.doi && (
                <div className="mt-6">
                  <p className="text-bordeaux-600 font-cormorant">
                    <strong>DOI:</strong> {paper.doi}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <style>{`
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

export default PaperDetail;
