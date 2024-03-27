function calculateTimeRemaining(endDate) {
    var currentTime = new Date();
    var endTime = new Date(endDate);

    var timeDifference = endTime.getTime() - currentTime.getTime();

    if (timeDifference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    var seconds = Math.floor(timeDifference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
}

function updateClock() {
    var endDate = new Date('2024-05-02T00:00:00');
    var timeRemaining = calculateTimeRemaining(endDate);

    document.getElementById('days').innerHTML = timeRemaining.days;
    document.getElementById('hours').innerHTML = ('0' + timeRemaining.hours).slice(-2);
    document.getElementById('minutes').innerHTML = ('0' + timeRemaining.minutes).slice(-2);
    document.getElementById('seconds').innerHTML = ('0' + timeRemaining.seconds).slice(-2);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set up the clock
updateClock();