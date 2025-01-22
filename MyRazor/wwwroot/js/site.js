
document.addEventListener("DOMContentLoaded", function () {
    const clockElement = document.getElementById("clock");

    //funktion för att uppdatera klockan genom att hämta datum och tid, formaterar till två siffror
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Uppdatera klockan varje sekund
    setInterval(updateClock, 1000);

    // Initiera direkt vid laddning
    updateClock();
});
