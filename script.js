document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".collapsible-section");

    sections.forEach(function (section) {
        const title = section.querySelector(".title");
        const content = section.querySelector(".content");

        title.addEventListener("click", function () {
            // Toggle class on section
            section.classList.toggle("expanded");

            // Set max-height dynamically for expanded sections
            if (section.classList.contains("expanded")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });
});