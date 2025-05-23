document.addEventListener("DOMContentLoaded", () => {
    // Auto-showing videos (if used)
    const videos = document.querySelectorAll(".background-video");
    if (videos.length > 0) {
        let currentVideoIndex = 0;
        function showNextVideo() {
            videos[currentVideoIndex].classList.remove("active");
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            videos[currentVideoIndex].classList.add("active");
        }
        videos[currentVideoIndex].classList.add("active");
        setInterval(showNextVideo, 5000);
    }

    // Navbar & toggles
    const navbar = document.querySelector('.header .navbar');
    const loginForm = document.querySelector('.header .login-form');
    const contactInfo = document.querySelector('.contact-info');

    document.querySelector('#menu-btn')?.addEventListener('click', () => {
        navbar?.classList.toggle('active');
        loginForm?.classList.remove('active');
        contactInfo?.classList.remove('active');
    });

    document.querySelector('#login-btn')?.addEventListener('click', () => {
        loginForm?.classList.add('active');
    });

    document.querySelector('#close-login-form')?.addEventListener('click', () => {
        loginForm?.classList.remove('active');
    });

    document.querySelector('#info-btn')?.addEventListener('click', () => {
        contactInfo?.classList.add('active');
    });

    document.querySelector('#close-contact-info')?.addEventListener('click', () => {
        contactInfo?.classList.remove('active');
    });

    window.onscroll = () => {
        navbar?.classList.remove('active');
        loginForm?.classList.remove('active');
        contactInfo?.classList.remove('active');
    };

    // Swiper for .home-slider
    new Swiper(".home-slider", {
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 4000, // 4 seconds
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Swiper for .reviews-slider
    new Swiper(".reviews-slider", {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});


// Also highlight on click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

