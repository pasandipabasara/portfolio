// Initialize Typed.js for animated text typing effect
document.addEventListener("DOMContentLoaded", function() {
    // Creates a new Typed instance for the element with class "text"
    new Typed(".text", {
        strings: ["Frontend Developer", "YouTuber", "Web Developer"], // Array of text strings to display
        typeSpeed: 100, // Speed of typing each character (in milliseconds)
        backSpeed: 100, // Speed of deleting each character (in milliseconds)
        backDelay: 1000, // Pause time before deleting text (in milliseconds)
        loop: true // Enables looping of the text animation
    });
});

