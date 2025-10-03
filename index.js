document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelectorAll("img");
    img.forEach(image => {
        if(!image.hasAttribute("loading")){
            image.setAttribute("loading", "lazy");
        }
    })
});