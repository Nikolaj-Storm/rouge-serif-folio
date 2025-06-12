
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BookOpen, ExternalLink } from 'lucide-react';

// Mock academic papers data
const papers = [
  {
    slug: 'digital-transformation-academia',
    title: 'Digital Transformation in Academic Research: A Comprehensive Analysis',
    year: '2024',
    venue: 'Journal of Academic Innovation',
    type: 'Journal Article',
    authors: ['Dr. Academic Scholar', 'Dr. Jane Researcher'],
    abstract: 'This paper examines the impact of digital technologies on academic research methodologies and collaboration patterns...',
    doi: '10.1000/journal.2024.001',
    citation: 'Scholar, A., & Researcher, J. (2024). Digital transformation in academic research: A comprehensive analysis. Journal of Academic Innovation, 15(2), 123-145. https://doi.org/10.1000/journal.2024.001'
  },
  {
    slug: 'interdisciplinary-research-networks',
    title: 'Mapping Interdisciplinary Research Networks: A Network Analysis Approach',
    year: '2023',
    venue: 'International Conference on Research Methods',
    type: 'Conference Paper',
    authors: ['Dr. Academic Scholar', 'Prof. Research Leader', 'Dr. Network Analyst'],
    abstract: 'We present a novel approach to mapping and analyzing interdisciplinary research networks using advanced network analysis techniques...',
    doi: '10.1000/conference.2023.042',
    citation: 'Scholar, A., Leader, R., & Analyst, N. (2023). Mapping interdisciplinary research networks: A network analysis approach. In Proceedings of the International Conference on Research Methods (pp. 256-271). Academic Press. https://doi.org/10.1000/conference.2023.042'
  },
  {
    slug: 'open-science-reproducibility',
    title: 'Open Science and Reproducibility: Challenges and Opportunities in the Digital Age',
    year: '2023',
    venue: 'Science Policy Review',
    type: 'Review Article',
    authors: ['Dr. Academic Scholar'],
    abstract: 'This review article explores the current state of open science practices and their impact on research reproducibility...',
    doi: '10.1000/policy.2023.015',
    citation: 'Scholar, A. (2023). Open science and reproducibility: Challenges and opportunities in the digital age. Science Policy Review, 8(3), 45-62. https://doi.org/10.1000/policy.2023.015'
  },
  {
    slug: 'ai-research-methodology',
    title: 'Artificial Intelligence in Research Methodology: Applications and Ethical Considerations',
    year: '2022',
    venue: 'AI and Society',
    type: 'Journal Article',
    authors: ['Dr. Academic Scholar', 'Dr. Ethics Expert', 'Dr. AI Researcher'],
    abstract: 'This paper investigates the integration of artificial intelligence tools in research methodology and discusses associated ethical implications...',
    doi: '10.1000/ai-society.2022.089',
    citation: 'Scholar, A., Expert, E., & Researcher, A. I. (2022). Artificial intelligence in research methodology: Applications and ethical considerations. AI and Society, 37(4), 1245-1262. https://doi.org/10.1000/ai-society.2022.089'
  },
  {
    slug: 'collaborative-research-platforms',
    title: 'Digital Collaborative Research Platforms: A Comparative Study',
    year: '2022',
    venue: 'Technology in Education Conference',
    type: 'Conference Paper',
    authors: ['Dr. Academic Scholar', 'Dr. Platform Developer'],
    abstract: 'A comprehensive comparison of digital platforms designed to facilitate collaborative research across institutions...',
    doi: '10.1000/edtech.2022.156',
    citation: 'Scholar, A., & Developer, P. (2022). Digital collaborative research platforms: A comparative study. In Proceedings of the Technology in Education Conference (pp. 78-92). EdTech Publishers. https://doi.org/10.1000/edtech.2022.156'
  },
  {
    slug: 'data-ethics-framework',
    title: 'A Framework for Data Ethics in Academic Research',
    year: '2021',
    venue: 'Ethics in Research Quarterly',
    type: 'Journal Article',
    authors: ['Dr. Academic Scholar', 'Prof. Ethics Board'],
    abstract: 'This paper proposes a comprehensive framework for addressing data ethics concerns in academic research contexts...',
    doi: '10.1000/ethics.2021.034',
    citation: 'Scholar, A., & Board, E. (2021). A framework for data ethics in academic research. Ethics in Research Quarterly, 12(1), 15-28. https://doi.org/10.1000/ethics.2021.034'
  }
];

const Papers = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Get unique years and types
  const years = Array.from(new Set(papers.map(paper => paper.year))).sort().reverse();
  const types = Array.from(new Set(papers.map(paper => paper.type)));

  // Filter papers
  const filteredPapers = papers.filter(paper => {
    const yearMatch = !selectedYear || paper.year === selectedYear;
    const typeMatch = !selectedType || paper.type === selectedType;
    return yearMatch && typeMatch;
  });

  return (
    <div className="min-h-screen py-20 px-6 lg:px-8 bg-beige-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl font-bold text-bordeaux-900 mb-6">
            Academic Publications
          </h1>
          <p className="text-xl text-bordeaux-700 font-cormorant leading-relaxed max-w-3xl mx-auto">
            A comprehensive collection of my research papers, publications, and scholarly contributions 
            to the academic community.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedYear(null)}
                className={`px-4 py-2 rounded-full font-cormorant transition-all duration-300 ${
                  selectedYear === null
                    ? 'bg-bordeaux-900 text-beige-50'
                    : 'bg-beige-200 text-bordeaux-700 hover:bg-beige-300'
                }`}
              >
                All Years
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full font-cormorant transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-bordeaux-900 text-beige-50'
                      : 'bg-beige-200 text-bordeaux-700 hover:bg-beige-300'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-4 py-2 rounded-full font-cormorant transition-all duration-300 ${
                  selectedType === null
                    ? 'bg-bordeaux-900 text-beige-50'
                    : 'bg-beige-200 text-bordeaux-700 hover:bg-beige-300'
                }`}
              >
                All Types
              </button>
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full font-cormorant transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-bordeaux-900 text-beige-50'
                      : 'bg-beige-200 text-bordeaux-700 hover:bg-beige-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {filteredPapers.map((paper, index) => (
            <article 
              key={paper.slug}
              className="bg-beige-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="font-playfair text-2xl font-semibold text-bordeaux-900 leading-tight">
                      <Link 
                        to={`/papers/${paper.slug}`}
                        className="hover:text-bordeaux-700 transition-colors"
                      >
                        {paper.title}
                      </Link>
                    </h2>
                    <span className="bg-bordeaux-100 text-bordeaux-700 px-3 py-1 rounded-full text-sm font-cormorant whitespace-nowrap ml-4">
                      {paper.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-bordeaux-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span className="font-cormorant">{paper.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen size={16} />
                      <span className="font-cormorant">{paper.venue}</span>
                    </div>
                  </div>

                  <p className="text-bordeaux-600 font-cormorant text-sm mb-3">
                    {paper.authors.join(', ')}
                  </p>

                  <p className="text-bordeaux-700 font-cormorant leading-relaxed mb-4">
                    {paper.abstract}
                  </p>

                  <div className="flex gap-3">
                    <Link 
                      to={`/papers/${paper.slug}`}
                      className="bg-bordeaux-900 text-beige-50 px-4 py-2 rounded-lg font-cormorant hover:bg-bordeaux-800 transition-colors duration-300"
                    >
                      View Details
                    </Link>
                    {paper.doi && (
                      <a 
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 border border-bordeaux-300 text-bordeaux-700 px-4 py-2 rounded-lg font-cormorant hover:bg-bordeaux-50 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        DOI
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 animate-fade-in-up">
          <div className="bg-beige-100 rounded-2xl p-8">
            <h2 className="font-playfair text-2xl font-semibold text-bordeaux-900 mb-6 text-center">
              Publication Statistics
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-playfair font-bold text-bordeaux-900 mb-2">
                  {papers.length}
                </div>
                <div className="text-bordeaux-700 font-cormorant">
                  Total Publications
                </div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-bordeaux-900 mb-2">
                  {papers.filter(p => p.type === 'Journal Article').length}
                </div>
                <div className="text-bordeaux-700 font-cormorant">
                  Journal Articles
                </div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-bordeaux-900 mb-2">
                  {papers.filter(p => p.type === 'Conference Paper').length}
                </div>
                <div className="text-bordeaux-700 font-cormorant">
                  Conference Papers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Papers;
