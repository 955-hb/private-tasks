// Hello Hannes

const fast = document.querySelector('#fast');
const cheap = document.querySelector('#cheap');
const good = document.querySelector('#good'); 

let history = [];

const form = document.querySelector('form');
form.addEventListener('change', (e) => {

    history.push(e.target);

    if (fast.checked && cheap.checked && good.checked) {
        // console.log('alle sind gecheckt')
        const checkBoxToUndcheck = history[history.length -2];
        checkBoxToUndcheck.checked = false;
    }


        //verkürzung des Arrays. 
    if (history.length > 2) {
        history.shift();
    }
})