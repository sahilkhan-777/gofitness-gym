document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelectorAll("img");
    img.forEach(image => {
        if (!image.hasAttribute("loading")) {
            image.setAttribute("loading", "lazy");
        }
    })
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