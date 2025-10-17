document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelectorAll("img");
    if ('loading' in HTMLImageElement.prototype) {
        img.forEach(image => {
            if (!image.hasAttribute("loading")) {
                image.setAttribute("loading", "lazy");
            }
        });
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

const startJourneyBtn = document.querySelector(".site-hero__cta-btn");
startJourneyBtn.addEventListener("click", function() {
    scrollToSection("contact");
});

const backToTopBtn = document.querySelector(".back-to-top-btn");
backToTopBtn.addEventListener("click", function() {
    scrollToSection("home");
});

document.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});



const navLinks = document.querySelectorAll(".site-header__nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);    //substring removes the #
        scrollToSection(targetId);
        if(hamburgerMenu){
            hamburgerMenu.classList.remove("active");
        }
    });
});


// hamburger menu
const hamburgerMenuBtn = document.querySelector(".site-header__hamburger-menu-btn");
const hamburgerMenu = document.querySelector(".site-header__hamburger-menu");
const closeMenuBtn = document.querySelector(".site-header__close-btn");

if (hamburgerMenuBtn && hamburgerMenu) {
    hamburgerMenuBtn.addEventListener('click', () => {
        hamburgerMenu.classList.toggle("active");
    });
}

if(hamburgerMenu){
    closeMenuBtn.addEventListener('click', ()=>{
        hamburgerMenu.classList.remove("active");
    });
}


// if (hamburgerMenu && hamburgerMenuBtn) {
//   document.addEventListener("click", event => {
//     if (!hamburgerMenu.contains(event.target) && !hamburgerMenuBtn.contains(event.target)) {
//       hamburgerMenu.classList.remove("active");
//     }
//   });
// }