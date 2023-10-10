//Hello Hannes

function updateTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();


//digi clock
document.querySelector('.digi-clock_hours').innerText = 
    formatNumberString(hours);
document.querySelector('.digi-clock_minutes').innerText = 
    formatNumberString(minutes);
document.querySelector('.digi-clock_seconds').innerText = 
    formatNumberString(seconds);


//classic clock
const hoursEL = document.querySelector('.clock_hours');
hoursEL.style.setProperty('--hours', hours * 30 + 'deg');

const minutesEL = document.querySelector('.clock_minutes');
minutesEL.style.setProperty('--minutes', minutes * 6 + 'deg');

const secondsEL = document.querySelector('.clock_seconds');
secondsEL.style.setProperty('--seconds', seconds * 6 + 'deg');

document
    .querySelectorAll('.digi-clock_dots')
    .forEach((e) => e.classList.toggle('digi-clock__dots--hidden'));
};

function formatNumberString(n) {
    let s = '0' + n.toString();
    return s.slice(-2);
};

updateTime();
setInterval(updateTime, 1000);