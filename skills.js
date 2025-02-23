// Select all elements with the class 'radial-bar' to update radial indicators
const radialBars = document.querySelectorAll('.radial-bar');

// Iterate over each radial bar element
radialBars.forEach(bar => {
    // Retrieve the percentage value from the data-percentage attribute, removing the '%' symbol
    const percentage = bar.getAttribute('data-percentage').replace('%', '');

    // Define the radius for the radial indicator (updated to fit CSS changes)
    const radius = 45; 
    const circumference = 2 * Math.PI * radius; // Calculate the circumference of the circle based on the radius

    // Calculate the offset to determine how much of the circle should be visible
    const offset = circumference - (percentage / 100) * circumference;

    // Select the path element within the radial bar to apply stroke styles
    const path = bar.querySelector('.path');

    // Set the stroke color of the circle to a light blue color
    path.setAttribute('stroke', '#00e6e6'); // Light blue color for the stroke

    // Configure the stroke-dasharray to create a circular path
    path.setAttribute('stroke-dasharray', circumference);

    // Set the stroke-dashoffset to adjust the visible part of the circle based on the percentage
    path.setAttribute('stroke-dashoffset', offset);
});
