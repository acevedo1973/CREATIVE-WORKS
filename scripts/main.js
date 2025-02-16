document.addEventListener("DOMContentLoaded", function() {
    const collageItems = document.querySelectorAll(".collage-item");
    const lightbox = document.getElementById("video-lightbox");
    const lightboxVideo = document.getElementById("lightbox-video");
    const closeBtn = document.querySelector(".close");

    // Open video in lightbox when a collage thumbnail is clicked
    collageItems.forEach(item => {
        item.addEventListener("click", function() {
            const videoSrc = this.getAttribute("data-video");
            lightboxVideo.src = videoSrc;
            lightbox.style.display = "flex";
        });
    });

    // Close lightbox when close button is clicked
    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
        lightboxVideo.src = ""; // Stop video playback when closing
    });

    // Close lightbox when clicking outside video
    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
            lightboxVideo.src = "";
        }
    });
});
