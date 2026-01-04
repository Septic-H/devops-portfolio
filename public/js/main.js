// ========================================
// MAIN.JS - Interactive Features
// ========================================

// Spotlight Effect - Mouse Tracking with smooth interpolation
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const ease = 0.15; // Smooth easing factor

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateSpotlight() {
    const spotlight = document.querySelector('.spotlight');
    if (spotlight) {
        // Smooth interpolation
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;
        
        spotlight.style.setProperty('--mouse-x', `${currentX}px`);
        spotlight.style.setProperty('--mouse-y', `${currentY}px`);
    }
    requestAnimationFrame(updateSpotlight);
}

updateSpotlight();

// Active Navigation on Scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to corresponding link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Smooth Scroll for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

console.log('Portfolio loaded successfully!');
