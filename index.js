document.addEventListener("DOMContentLoaded", function () {
    const img = document.querySelectorAll("img");
    img.forEach(image => {
        if (!image.hasAttribute("loading")) {
            image.setAttribute("loading", "lazy");
        }
    })
});

function scrollToContact() {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

const startJourneyBtn = document.querySelector(".cta-button");

startJourneyBtn.addEventListener("click", scrollToContact);