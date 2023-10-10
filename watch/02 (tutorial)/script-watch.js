//Hello Hannes

function setClock() {
    const time = new Date();
    const clock = document.getElementById('clock');
    const hands = [
        clock.getElementsByClassName('second')[0],
        clock.getElementsByClassName('minute')[0],
        clock.getElementsByClassName('hour')[0],
    ];
    hands[0].style.transform = 'rotate('+(time.getSeconds()*6)+'deg)';
    hands[1].style.transform = 'rotate('+(time.getMinutes()*6)+'deg)';
    hands[2].style.transform = 'rotate('+((time.getHours()%12)*30)+'deg)';
}
setClock();
setInterval(setClock,1000);