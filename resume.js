document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-container img");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            alert("This is a placeholder for a project link!");
        });
    });
});
