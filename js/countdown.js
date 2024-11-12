const day = document.getElementById("countdown-day");
const hours = document.getElementById("countdown-hours");
const minutes = document.getElementById("countdown-minutes");
const seconds = document.getElementById("countdown-seconds");
const countdown = [day, hours, minutes, seconds];
const dateOut = new Date(Date.UTC(2025, 9, 1));

const timerCountdown = () => {
  const timeOut = dateOut - new Date();
  setTimeout(() => {
    // console.log(timeOut);
    /**timeOut = le nombre de secondes restantes en timestamp
     * obtenir les secondes : timeOut / 24 / 60 / 60 / 1000
     * obtenir les minutes : timeOut / 24 / 60 / 1000
     * heures : timeOut
     *
     */
    const dayCounter = Math.floor(timeOut / 1000 / (3600 * 24));
    const hoursCounter = Math.floor(timeOut / 1000 / 3600 / dayCounter);
    console.log(hoursCounter);

    day.innerHTML = dayCounter + "<em> Jours</em>";
    hours.innerHTML = Math.floor(timeOut / 1000 / 3600) + "<em> Heures</em>";
    minutes.innerHTML = hoursCounter + "<em> Minutes</em>";
    seconds.innerHTML =
      Math.floor(timeOut / 1000 / (3600 * 24)) + "<em> Secondes</em>";

    timerCountdown();
  }, 1000);
};

timerCountdown();
