// Script to toggle navigation for small screens (Hamburger menu)
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '☰';
    navbar.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
    
});

