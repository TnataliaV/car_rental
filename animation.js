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

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileLinks = document.querySelector('.mobile.links');
    const closeMenu = document.querySelector('.close-menu');

    burgerMenu.addEventListener('click', function () {
        mobileLinks.classList.add('active');
    });

    closeMenu.addEventListener('click', function () {
        mobileLinks.classList.remove('active');
    });
    
    document.addEventListener('click', function(event) {
        if (!mobileLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
            mobileLinks.classList.remove('active');
        }
    });
});