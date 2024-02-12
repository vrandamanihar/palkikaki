// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Countdown Timer
    const timerDisplay = document.getElementById('timer');
    const deadline = new Date(Date.now() + 10 * 60 * 1000);

    function updateTimer() {
        const currentTime = new Date();
        const timeDiff = deadline - currentTime;
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        timerDisplay.textContent = `${minutes}m ${seconds}s`;

        if (timeDiff <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = 'Time expired';
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    // Slide-in Form
    setTimeout(function () {
        document.querySelector('.slide-in-form').style.bottom = '0';
    }, 15000);
});
