let skills_section = document.querySelector('.skills'),
    span_progress = document.querySelectorAll('.progress span'),
    nav_link = document.querySelectorAll('.navbar-nav .nav-link');


window.onscroll = function () {
    if (window.scrollY >= skills_section.offsetTop - 350 || window.scrollY == skills_section.offsetTop) {

        span_progress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    } else if (window.scrollY <= skills_section.offsetTop - 200) {
        span_progress.forEach((span) => {
            span.style.dispaly = "none";
        });
    }
}

nav_link.forEach((link) => {
    link.addEventListener('click', () => {
        removeClassActive();
        link.classList.add('active');
    });
});


function removeClassActive() {
    nav_link.forEach((link) => {
        link.classList.remove('active');
    });
}



ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1500,
    delay: 200
});


ScrollReveal().reveal('.info-content', { origin: 'top' });

ScrollReveal().reveal('.personal-info', { origin: 'right' });

ScrollReveal().reveal('.contact-info', { origin: 'bottom' });

ScrollReveal().reveal('.contact-form', { origin: 'right' });


let services_projects = ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 1800,
    // delay: 200
});

services_projects.reveal('.services .col-lg-4', { origin: 'right' });
services_projects.reveal('.projects .col-md-4', { origin: 'left' });

let skills = ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
});

skills.reveal('.skills .program-skills', { origin: 'bottom' });
skills.reveal('.skills .public-skills', { origin: 'top' });


let education = ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
});

education.reveal('.education .education-details', { delay: 200, origin: 'bottom' });


