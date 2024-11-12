const day = document.getElementById("countdown-day");
const hours = document.getElementById("countdown-hours");
const minutes = document.getElementById("countdown-minutes");
const seconds = document.getElementById("countdown-seconds");
const dateOut = new Date(Date.UTC(2025, 9, 1));

const timerCountdown = () => {
  const timeOut = dateOut - new Date();
  setTimeout(() => {
    /**
     * timeOut = le nombre de secondes restantes en timestamp
     * chaque counter retourne le nombre restant
     * calculé à chaque seconde, le timer est dynamique
     * et la récursivité fait que cette fonction se répète à l'infini
     */
    const dayCounter = Math.floor(timeOut / 1000 / (3600 * 24));
    const hoursCounter = Math.floor(timeOut / 1000 / 3600) % 24;
    const minutesCounter = Math.floor(timeOut / 1000 / 60) % 60;
    const secondsCounter = Math.floor(timeOut / 1000) % 60;

    day.innerHTML = dayCounter + "<em>Jours</em>";
    hours.innerHTML = hoursCounter + "<em>Heures</em>";
    minutes.innerHTML = minutesCounter + "<em>Minutes</em>";
    seconds.innerHTML =
      (secondsCounter == 0 ? "00" : secondsCounter) + "<em>Secondes</em>";

    timerCountdown();
  }, 1000);
};

timerCountdown();
