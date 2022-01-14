const daysEl = document.getElementById("daysEl")
const hoursEl = document.getElementById("hoursEl")
const minutesEl = document.getElementById("minutesEl")
const secondsEl = document.getElementById("secondsEl")

let endYear = 2022;
let endMonth = 7;
let endDay = 14;

//Format time to have a '0' when the countdown is < 10.
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//create the countdown numbers dividing by different times types.
function countdown () { 
    const endDate = new Date(endYear, endMonth, endDay);
    const currentDate = new Date();

        const seconds = Math.floor((endDate - currentDate) / 1000);
        const days = Math.floor(seconds / 3600 / 24);
        const hours = Math.floor(seconds / 3600) % 24;
        const mins = Math.floor((seconds / 60) % 60);
        const secs = Math.floor(seconds % 60);
        daysEl.innerHTML = days; 
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(secs);
}


let currentDate = new Date();
let finalDate = new Date(endYear, endMonth, endDay);
let diff = Math.floor(finalDate - currentDate);

/* Controls the year changes.
When a new year comes, it'll get the current year.
When the current date reaches the end date, this sum one in the end year date.
when the difference between the current date and end date is bigger than 0, it call's the function.
*/
if (diff > 0){
    countdown();
} else if (diff < 0 && new Date().getFullYear() === endYear) {
    endYear = new Date().getFullYear() +1;
    countdown();
} else {
    endYear = new Date().getFullYear();
    countdown();
}

setInterval(countdown, 1000)

