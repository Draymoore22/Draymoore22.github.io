// Fade-in on scroll
const faders = document.querySelectorAll('.fade');

const appear = () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', appear);
window.addEventListener('load', appear);
