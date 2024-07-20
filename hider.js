document.addEventListener('DOMContentLoaded', () => {
    const hiddenContents = document.querySelectorAll('.discography, .slider, .membership-container, .events-container');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenContents.forEach(content => {
        observer.observe(content);
    });
});