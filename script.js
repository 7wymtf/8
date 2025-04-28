// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        const menuButton = document.querySelector('.mobile-menu-button');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuButton.classList.remove('active');
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollPosition = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Parallax effect for gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
window.addEventListener('scroll', () => {
    galleryItems.forEach(item => {
        const speed = item.getAttribute('data-parallax');
        const rect = item.getBoundingClientRect();
        const scrollPosition = window.pageYOffset;
        const itemPosition = rect.top + scrollPosition;
        const windowHeight = window.innerHeight;
        
        if (itemPosition < scrollPosition + windowHeight && itemPosition + rect.height > scrollPosition) {
            const yPos = -(scrollPosition * speed);
            item.style.transform = `translateY(${yPos}px)`;
        }
    });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('reveal');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu functionality
const createMobileMenu = () => {
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    navbar.appendChild(menuButton);
    
    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuButton.classList.toggle('active');
        menuButton.innerHTML = menuButton.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuButton.classList.remove('active');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
};

// Initialize mobile menu if needed
if (window.innerWidth <= 768) {
    createMobileMenu();
}

// Handle window resize
window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.querySelector('.mobile-menu-button');
    
    if (window.innerWidth > 768) {
        if (menuButton) {
            menuButton.remove();
        }
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    } else if (!menuButton) {
        createMobileMenu();
    }
});

// Video play button
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        // Replace with actual video implementation
        alert('Video player will be implemented here');
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Form submission will be implemented here');
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
}); 