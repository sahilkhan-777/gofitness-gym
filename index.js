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

const navLinks = document.querySelectorAll(".site-hero__nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);    //substring removes the #
        scrollToSection(targetId);
    });
});