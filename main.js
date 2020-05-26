document.addEventListener('DOMContentLoaded',() => {
    console.log(document.images);
    function slideSocial() {
        anime({
            targets: '.social',
            top: [0,'35rem'],
            opacity: [0,1],
            duration: 1000,
            easing: 'easeInOutElastic',
            delay: 2000
        })
    };
    slideSocial();

    const navList = document.querySelector('.nav-list');
    const hamburger = document.querySelector('.hamburger');
    const body = document.querySelector('body');

    hamburger.addEventListener('click',openNav);

    function openNav() {
        navList.classList.toggle('nav-opened');
        hamburger.classList.toggle('cross');
        body.classList.toggle('fixed-content');
    };

    const navLinks = navList.querySelectorAll('li')
    ;
    navLinks.forEach(link => {
        link.addEventListener('click',() => {
            navList.classList.remove('nav-opened');
            hamburger.classList.remove('cross');
            body.classList.remove('fixed-content');
        });
    });
    
    const slider = document.querySelector('.slider');
    const food = document.querySelectorAll('.food');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const firstFood = document.querySelector('.item1');
    const lastFood = document.querySelector('.item6');
    var counter = 0;
    var size = food[0].clientWidth;

    nextBtn.addEventListener('click',() => {
        slider.style.transition = 'transform .5s ease';
        counter++;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click',() => {
        slider.style.transition = 'transform .5s ease';
        counter--;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    var rootOptions = {
        root: document.querySelector('.food-desc'),
        threshold: .5,
        rootMargin: "0px"
    };

    const firstSlideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                prevBtn.style.opacity = '0';
                prevBtn.style.visibility = 'hidden';
            }else {
                prevBtn.style.opacity = '1';
                prevBtn.style.visibility = 'visible';
            }
        })
    },rootOptions);

    firstSlideObserver.observe(firstFood);

    const lastSlideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nextBtn.style.opacity = '0';
                nextBtn.style.visibility = 'hidden';
            }else {
                nextBtn.style.opacity = '1';
                nextBtn.style.visibility = 'visible';
            }
        })
    },rootOptions);

    lastSlideObserver.observe(lastFood);

    var pizzaOptions = {
        root: document.querySelector('.food-desc'),
        threshold: .5,
        rootMargin: "0px"
    };

    const descContent = document.querySelectorAll('.desc-content');
    const imgs = document.querySelectorAll('.img-wrapper');
    const descObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }else {
                entry.target.classList.remove('show');
            }
        })
    },
    pizzaOptions);

    const imgObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }else {
                entry.target.classList.remove('show');
            }
        })
    },
    pizzaOptions);

    descContent.forEach(content => {
        descObserver.observe(content);
    });

    imgs.forEach(img => {
        imgObserver.observe(img);
    });

    const secOptions = {
        root: null,
        rootMargin: "0px",
        threshold: .4
    };

    var infObserver = new IntersectionObserver((entries,infObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                anime.timeline({
                    easing: 'easeOutSine',
                    duration: 1000
                })
                .add({
                    targets: '.info-top img',
                    translateX: ['-120%',0]
                })
                .add({
                    targets: '.about-text h2, .about-text p',
                    opacity: [0,1],
                    duration: 1300
                },'-=1000')
                .add({
                    targets: '.big-image',
                    opacity: [0,1],
                    translateX: ['-120%',0]
                },'-=1000')
                .add({
                    targets: '.chef',
                    opacity: [0,1],
                    translateX: ['120%',0]
                },'-=1000')
                .add({
                    targets: '.small-image',
                    opacity: [0,1],
                    translateY: ['5rem',0],
                    duration: 500
                })
                .add({
                    targets: '.info-top .btn-div a',
                    opacity: [0,1],
                    scale: [1,1.7,1],
                    easing: 'easeInOutElastic',
                    duration: 300
                });

                infObserver.unobserve(entry.target);
            }
        })
    },secOptions);

    const infoSection = document.querySelector('.info');
    infObserver.observe(infoSection);

    var processObserver = new IntersectionObserver((entries,processObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                anime.timeline({
                    easing: 'easeOutSine',
                    duration: 1000
                })
                .add({
                    targets: '.process .header',
                    translateX: ['-120%',0]
                })
                .add({
                    targets: '.part img',
                    opacity: [0,1],
                    translateY: ['3rem',0]
                })
                .add({
                    targets: '.text-cont',
                    opacity: [0,1]
                })
                .add({
                    targets: '.slice img',
                    opacity: [0,1],
                    translateX: ['10rem',0],
                    translateY: ['10rem',0]
                },'-=3000');

                processObserver.unobserve(entry.target);
            }
        })
    },secOptions);

    const procSection = document.querySelector('.process');
    processObserver.observe(procSection);

    var locationObserver = new IntersectionObserver((entries,locationObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                anime.timeline({
                    easing: 'easeOutSine',
                    duration: 800
                })
                .add({
                    targets: '.addresses .title',
                    opacity: [0,1],
                    translateX: ['-3rem',0]
                })
                .add({
                    targets: '.address-wrapper address',
                    opacity: [0,1],
                    translateX: ['-3rem',0],
                    delay: anime.stagger(100)
                })
                .add({
                    targets: '.map',
                    opacity: [0,1]
                },'-=2000');

                document.querySelector('.addresses').style.boxShadow = '.5rem .5rem .5rem rgba(0,0,0,.05),-.5rem -.5rem .5rem rgba(0,0,0,.05)';
                locationObserver.unobserve(entry.target);
            }
        })
    },secOptions);

    const locationSection = document.querySelector('.locate-us');
    locationObserver.observe(locationSection);

    var endOptions = {
        root: null,
        rootMargin: "0px",
        threshold: .7
    };

    var footObserver = new IntersectionObserver((entries,footObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                anime.timeline({
                    easing: 'easeOutSine',
                    duration: 800
                })
                .add({
                    targets: 'footer .logo, .links-wrapper ul li',
                    delay: anime.stagger(100),
                    opacity: [0,1],
                    translateX: ['-5rem',0]
                })
                .add({
                    targets: 'footer .social-media .fab',
                    opacity: [0,1],
                    translateY: ['-5rem',0],
                    delay: anime.stagger(200),
                    easing: 'easeInOutElastic'
                });

                footObserver.unobserve(entry.target);
            }
        })
    },endOptions);

    const footer = document.querySelector('footer');
    footObserver.observe(footer);
});
