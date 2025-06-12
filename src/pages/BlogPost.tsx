
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';

// Mock blog post content - in a real app this would come from a CMS
const blogPostContent = {
  'future-of-academic-research': {
    title: 'The Future of Academic Research in the Digital Age',
    date: '2024-03-15',
    tags: ['Research', 'Technology', 'Academia'],
    content: `
      <p>The landscape of academic research is undergoing a profound transformation. As we move deeper into the digital age, the traditional boundaries and methodologies that have defined scholarly work for centuries are being reimagined and redefined.</p>
      
      <h2>Digital Tools and Methodologies</h2>
      <p>Today's researchers have access to an unprecedented array of digital tools and resources. From advanced statistical software to machine learning algorithms, these technologies are not just changing how we analyze data—they're changing what questions we can ask and how we approach complex problems.</p>
      
      <p>The democratization of computational resources through cloud computing has made sophisticated analyses accessible to researchers regardless of their institutional resources. This levels the playing field and opens new possibilities for collaboration across traditional boundaries.</p>
      
      <h2>Collaboration and Open Science</h2>
      <p>The digital revolution has also transformed how researchers collaborate. Virtual conferences, online collaboration platforms, and digital repositories have made it possible to work with colleagues across the globe in real-time. This has led to more diverse research teams and richer, more comprehensive studies.</p>
      
      <p>The open science movement, facilitated by digital platforms, is making research more transparent, reproducible, and accessible. Preprint servers, open-access journals, and data sharing platforms are changing the way knowledge is disseminated and validated.</p>
      
      <h2>Challenges and Opportunities</h2>
      <p>However, this transformation is not without its challenges. Issues of data privacy, digital divide, and the rapid pace of technological change pose significant questions for the academic community. How do we ensure that the benefits of digital transformation are shared equitably? How do we maintain the rigor and integrity of research in an increasingly fast-paced digital environment?</p>
      
      <p>These challenges also present opportunities. They force us to reconsider fundamental assumptions about how research should be conducted, validated, and shared. They encourage us to develop new frameworks for thinking about quality, impact, and responsibility in academic work.</p>
      
      <h2>Looking Forward</h2>
      <p>As we look to the future, it's clear that the intersection of technology and academia will continue to evolve. The researchers who thrive will be those who can adapt to these changes while maintaining their commitment to rigorous, meaningful scholarship.</p>
      
      <p>The future of academic research is not just about adopting new technologies—it's about reimagining what it means to be a scholar in the 21st century. It's about embracing the possibilities that digital tools offer while staying true to the fundamental values of academic inquiry: curiosity, rigor, and the pursuit of truth.</p>
    `
  },
  // Add other blog posts as needed...
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostContent[slug as keyof typeof blogPostContent] : null;

  if (!post) {
    return (
      <div className="min-h-screen py-20 px-6 lg:px-8 bg-beige-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl font-bold text-bordeaux-900 mb-4">
            Post Not Found
          </h1>
          <Link to="/blog" className="elegant-link font-cormorant text-lg">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20 px-6 lg:px-8 bg-beige-50">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 elegant-link font-cormorant text-lg"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 animate-fade-in-up">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-bordeaux-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-bordeaux-600">
            <div className="flex items-center gap-1">
              <Calendar size={18} />
              <span className="font-cormorant text-lg">{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} />
              <div className="flex gap-2">
                {post.tags.map(tag => (
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
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
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
        `}</style>
      </article>
    </div>
  );
};

export default BlogPost;
