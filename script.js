// Get the line element
const line = document.getElementById('line');

// Initial rotation angle
let angle = 0;

// Function to rotate the line
function rotateLine() {
  angle += 2; // Increase angle by 2 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply rotation
}

// Rotate the line smoothly every 20 milliseconds
setInterval(rotateLine, 20);
