document.addEventListener("DOMContentLoaded", () => {
    const clockElement = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}`;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display time immediately
});
