  // Mobile Menu Toggle
  document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Add testimonial slider functionality
document.addEventListener('DOMContentLoaded', function() {
    // Simple testimonial slider (would be enhanced with a library like Swiper in production)
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    // Initialize
    showTestimonial(0);
    
    // Auto-rotate (optional)
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Enhanced parallax for multiple sections
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        // Hero parallax
        document.querySelector('.hero').style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        
        // Process section parallax
        document.querySelector('.process').style.backgroundPositionY = `${scrollPosition * 0.3}px`;
        
        // Contact section parallax
        document.querySelector('.contact').style.backgroundPositionY = `${scrollPosition * 0.2}px`;
    });
});