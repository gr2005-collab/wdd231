// footer.js

window.addEventListener('load', () => {

    // Update current year
    const yearElem = document.getElementById('year');
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }

    // Update live current date/time
    const dateTimeElem = document.getElementById('currentDateTime');
    if (dateTimeElem) {
        function updateDateTime() {
            const now = new Date();
            // Nice readable format
            const formatted = now.toLocaleString(undefined, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            dateTimeElem.textContent = `Last Update: ${formatted}`;
        }

        updateDateTime();             // Run immediately
        setInterval(updateDateTime, 1000); // Update every second
    }
});
