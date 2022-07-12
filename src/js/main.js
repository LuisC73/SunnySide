const navButton = document.querySelector(".nav__button"),
    navbar = document.querySelector(".nav"),
    navList = document.querySelector(".nav__ul");

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('nav--sticky', window.scrollY > 0);
    })

    navButton.addEventListener('click',() => {
        navList.classList.toggle('nav__ul--active');
    })
