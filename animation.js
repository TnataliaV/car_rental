document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in'); 
        observer.observe(section); 
    });
});

document.querySelector('.burger-menu').addEventListener('click', function () {
    const mobileMenu = document.querySelector('.mobile.links');
    mobileMenu.classList.toggle('open');
});