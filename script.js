//your JS code here. If required.
// Select the line element
const line = document.getElementById('line');

// Initialize angle
let angle = 0;

// Function to rotate the line
function rotateLine() {
  angle += 2; // Increase angle by 2 degrees
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

// Rotate every 20ms
setInterval(rotateLine, 20);
