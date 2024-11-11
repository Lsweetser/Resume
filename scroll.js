const scrollContainer = document.querySelector('.scroll-container');
let autoScrollEnabled = true;
let resumeAutoScroll;

// Auto-scroll function
function autoScroll() {
    if (autoScrollEnabled) {
        scrollContainer.scrollTop += 1; // Scroll up by 1 pixel
        if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
            scrollContainer.scrollTop = 0; // Loop back to the start
        }
    }
}

// Start auto-scroll at a slow pace
let autoScrollInterval = setInterval(autoScroll, 50);

// Listen for user scroll to pause auto-scroll
scrollContainer.addEventListener('scroll', () => {
    // Disable auto-scroll when user manually scrolls
    autoScrollEnabled = false;
    clearTimeout(resumeAutoScroll); // Reset the timeout if the user scrolls

    // Set a timer to resume auto-scroll after 1 minute of inactivity
    resumeAutoScroll = setTimeout(() => {
        autoScrollEnabled = true;
    }, 60000); // 1 minute
});

