
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Blog Filter Functionality
    const tagButtons = document.querySelectorAll('.tag-btn');
    const postCards = document.querySelectorAll('.post-card');

    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTag = this.getAttribute('data-tag');
            
            // Update active button
            tagButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter posts
            postCards.forEach(card => {
                const cardTags = card.getAttribute('data-tags') || '';
                if (selectedTag === 'all' || cardTags.includes(selectedTag)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Papers Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const paperCards = document.querySelectorAll('.paper-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            const filterGroup = this.parentNode;
            
            // Update active button within the same group
            filterGroup.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Get all active filters
            const activeFilters = {
                year: document.querySelector('.filter-group:first-child .filter-btn.active').getAttribute('data-filter'),
                type: document.querySelector('.filter-group:last-child .filter-btn.active').getAttribute('data-filter')
            };

            // Filter papers
            paperCards.forEach(card => {
                const cardYear = card.getAttribute('data-year');
                const cardType = card.getAttribute('data-type');
                
                const yearMatch = activeFilters.year === 'all' || cardYear === activeFilters.year;
                const typeMatch = activeFilters.type === 'all' || cardType === activeFilters.type;

                if (yearMatch && typeMatch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Citation Copy Functionality
    const copyButtons = document.querySelectorAll('.copy-citation');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const citation = this.getAttribute('data-citation');
            
            // Use the modern clipboard API if available
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(citation).then(() => {
                    showCitationCopiedNotification();
                }).catch(err => {
                    console.error('Failed to copy citation: ', err);
                    fallbackCopyTextToClipboard(citation);
                });
            } else {
                // Fallback for older browsers or non-secure contexts
                fallbackCopyTextToClipboard(citation);
            }
        });
    });

    // Fallback copy function for older browsers
    function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                showCitationCopiedNotification();
            } else {
                console.error('Fallback: Could not copy text');
            }
        } catch (err) {
            console.error('Fallback: Could not copy text: ', err);
        }

        document.body.removeChild(textArea);
    }

    // Show citation copied notification
    function showCitationCopiedNotification() {
        // Remove any existing notification
        const existingNotification = document.querySelector('.citation-copied');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create and show new notification
        const notification = document.createElement('div');
        notification.className = 'citation-copied';
        notification.textContent = 'Citation copied to clipboard!';
        document.body.appendChild(notification);

        // Show the notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Hide and remove the notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(253, 249, 241, 0.95)';
        } else {
            navbar.style.background = 'rgba(253, 249, 241, 0.9)';
        }
    });

    // Fade in animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for animation
    const cards = document.querySelectorAll('.feature-card, .project-card, .post-card, .paper-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Smooth scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});
