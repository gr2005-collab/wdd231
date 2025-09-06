// Display current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Display last modified date in the footer
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
