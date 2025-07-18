var countdownForm = document.getElementById('countdownForm');
var eventNameInput = document.getElementById('eventName');
var timeInput = document.getElementById('timeRemaining');
var countdownDisplay = document.getElementById('countdownDisplay');
var eventList = document.getElementById('eventList');
var searchEvent = document.getElementById('searchEvent');

var events = [];
var intervalId = null;
var timeoutId = null;

countdownForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = eventNameInput.value.trim();
    var time = parseInt(timeInput.value);
    if (name === '') {
        alert('Event Name cannot be empty.');
        return;
    }
    if (isNaN(time) || time <= 0) {
        alert('Time Remaining must be a positive number.');
        return;
    }
    var event = {
        name: name,
        time: time,
        originalTime: time
    };
    events.push(event);
    showEvents();
    startCountdown(event);
    eventNameInput.value = '';
    timeInput.value = '';
});

function startCountdown(event) {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    countdownDisplay.textContent = 'Time Remaining: ' + event.time + ' seconds';
    intervalId = setInterval(function() {
        event.time--;
        if (event.time > 0) {
            countdownDisplay.textContent = 'Time Remaining: ' + event.time + ' seconds';
        } else {
            clearInterval(intervalId);
            countdownDisplay.textContent = 'Event ' + event.name + ' has started!';
        }
    }, 1000);
    timeoutId = setTimeout(function() {
        countdownDisplay.textContent = 'Event ' + event.name + ' has started!';
        showEvents();
    }, event.time * 1000);
}

function showEvents() {
    var filter = searchEvent.value.trim().toLowerCase();
    eventList.innerHTML = '';
    for (var i = 0; i < events.length; i++) {
        if (events[i].name.toLowerCase().includes(filter)) {
            var li = document.createElement('li');
            li.textContent = events[i].name + ' (' + events[i].originalTime + 's)';
            eventList.appendChild(li);
        }
    }
}

searchEvent.addEventListener('input', showEvents); 