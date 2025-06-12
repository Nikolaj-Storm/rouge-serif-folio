
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';

// Mock blog data - in a real app this would come from a CMS
const blogPosts = [
  {
    slug: 'future-of-academic-research',
    title: 'The Future of Academic Research in the Digital Age',
    date: '2024-03-15',
    tags: ['Research', 'Technology', 'Academia'],
    excerpt: 'Exploring how digital transformation is reshaping the landscape of academic research and scholarly communication...'
  },
  {
    slug: 'interdisciplinary-approaches',
    title: 'Interdisciplinary Approaches to Complex Problems',
    date: '2024-03-10',
    tags: ['Methodology', 'Collaboration'],
    excerpt: 'Why breaking down silos between disciplines is essential for addressing the challenges of our time...'
  },
  {
    slug: 'open-science-movement',
    title: 'Embracing the Open Science Movement',
    date: '2024-03-05',
    tags: ['Open Science', 'Publishing', 'Access'],
    excerpt: 'The importance of making research accessible, reproducible, and transparent for the benefit of all...'
  },
  {
    slug: 'mentoring-next-generation',
    title: 'Mentoring the Next Generation of Researchers',
    date: '2024-02-28',
    tags: ['Education', 'Mentorship', 'Career'],
    excerpt: 'Reflections on the responsibility and joy of guiding emerging scholars in their academic journey...'
  },
  {
    slug: 'work-life-balance-academia',
    title: 'Finding Balance in Academic Life',
    date: '2024-02-20',
    tags: ['Work-Life Balance', 'Wellness', 'Productivity'],
    excerpt: 'Strategies for maintaining mental health and personal fulfillment while pursuing academic excellence...'
  }
];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter posts by selected tag
  const filteredPosts = selectedTag 
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-8 bg-beige-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-playfair text-5xl font-bold text-bordeaux-900 mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-bordeaux-700 font-cormorant leading-relaxed max-w-2xl mx-auto">
            Thoughts, reflections, and insights from my academic journey and research experiences.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full font-cormorant transition-all duration-300 ${
                selectedTag === null
                  ? 'bg-bordeaux-900 text-beige-50'
                  : 'bg-beige-200 text-bordeaux-700 hover:bg-beige-300'
              }`}
            >
              All Posts
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full font-cormorant transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-bordeaux-900 text-beige-50'
                    : 'bg-beige-200 text-bordeaux-700 hover:bg-beige-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.slug} 
              className="bg-beige-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/blog/${post.slug}`} className="block group">
                <h2 className="font-playfair text-2xl font-semibold text-bordeaux-900 mb-4 group-hover:text-bordeaux-700 transition-colors">
                  {post.title}
                </h2>
                
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-bordeaux-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span className="font-cormorant">{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={16} />
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span 
                          key={tag}
                          className="bg-bordeaux-100 text-bordeaux-700 px-2 py-1 rounded-full text-xs font-cormorant"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-bordeaux-700 font-cormorant text-lg leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="mt-6">
                  <span className="elegant-link font-cormorant font-medium">
                    Read More →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
