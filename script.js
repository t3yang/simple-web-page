// Function to show the selected section and hide others
function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(section);
    selectedSection.style.display = 'block';
}

// Show the home section by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

// JavaScript to trigger an alert when the button is clicked
document.getElementById("alertButton").onclick = function() {
    alert("Button clicked! Welcome to my website.");
};
