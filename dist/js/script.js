const pageUpBtn = document.getElementById("pageUpBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 1200) {
        pageUpBtn.style.display = "block";
    } else {
        pageUpBtn.style.display = "none";
    }
});

pageUpBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener('DOMContentLoaded', function () {
    new WOW().init();
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

