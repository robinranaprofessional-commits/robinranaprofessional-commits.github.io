/**
 * Robin Rana
 * T00743614
 * COMP2681 Assignment 5
 *
 * This script:
 * 1. Displays the current system date and time
 * 2. Changes the background colour at regular intervals
 */

// Display current date and time
function showDateTime() {
    const now = new Date();
    document.getElementById("dateTime").innerHTML =
        "Current Date & Time: " + now.toLocaleString();
}

// update every second
showDateTime();
setInterval(showDateTime, 1000);
 
// Change background colour 
const colors = [
    "#a57e56",
    "#F3E0B0",
    "#FFFDD0",
    "#F7DBEC",
    "#F8C8E2",
    "#F6B3DC"
];

let colorIndex = 0;

function changeBackground() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

// change every 5 seconds
setInterval(changeBackground, 5000);
