// toggle navbar menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navlist a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navlist a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Web Designer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// === About Button Tabs ===
const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content-btn .content');

// Initialize the active tab on page load
function initializeTabs() {
    buttons.forEach((button, index) => {
        if (button.classList.contains('active')) {
            contents.forEach(content => {
                content.classList.remove('active');
                content.setAttribute('hidden', 'true');
                content.setAttribute('aria-hidden', 'true');
            });
            if (contents[index]) {
                contents[index].classList.add('active');
                contents[index].removeAttribute('hidden');
                contents[index].setAttribute('aria-hidden', 'false');
                button.setAttribute('aria-selected', 'true');
            }
        } else {
            button.setAttribute('aria-selected', 'false');
        }
    });
}

// Handle tab switching
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) return;

        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        contents.forEach(content => {
            content.classList.remove('active');
            content.setAttribute('hidden', 'true');
            content.setAttribute('aria-hidden', 'true');
        });
        if (contents[index]) {
            contents[index].classList.add('active');
            contents[index].removeAttribute('hidden');
            contents[index].setAttribute('aria-hidden', 'false');
        }
    });
});

// Run initialization
initializeTabs();

// === Portfolio Filter (MixItUp) ===
var mixer = mixitup('.portfolio-gallery', {
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});

// === Swiper Initialization ===
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});

// === ScrollReveal Animations ===
const sr = ScrollReveal({
    distance: "40px",
    duration: 2000,
    // reset: true,
});

sr.reveal('.logo',{delay:200, origin: 'left'});
// sr.reveal('.navlist',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:520, origin: 'right'});

sr.reveal('.home-content span',{delay:680, origin: 'top'});
sr.reveal('.home-content h1',{delay:680, origin: 'left'});
sr.reveal('.home-content h3',{delay:680, origin: 'left'});
sr.reveal('.home-content p',{delay:750, origin: 'right'});
sr.reveal('.social-media',{delay:750, origin: 'right'});
sr.reveal('.btn-box',{delay:860, origin: 'left'});
sr.reveal('.home-img',{delay:1000, origin: 'right'});
sr.reveal('.about-img, .filter-buttons, .contact-info', {origin: "left"});
sr.reveal('.about-content, .skills', {origin: "right"});
sr.reveal('.services-container', { origin: 'bottom' });


// Scroll to Top Function
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Scroll to Top Button
window.addEventListener('scroll', () => {
    const topBtn = document.getElementById('topBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(scrollFunction, 100);
});

// Set Copyright Year
document.getElementById('copyright-year').textContent = new Date().getFullYear();