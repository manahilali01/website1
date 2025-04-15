// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav items when clicked
const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Simple mobile menu toggle functionality
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');

logo.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        nav.classList.toggle('show');
    }
});