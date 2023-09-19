let hobbys = [
    '',
    'fucking',
    'eating',
    'drinking'
];

//console.log(hobbys[2]);

function alarm () {
    alert('You want a Drink?')
}

// zuweisen Button
const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const btnThree = document.getElementById('btnThree');

//ausgabe-functionen

//ONE
btnOne.addEventListener('click', function () {
    console.log('Hobby Nr. One is: ' + hobbys[1] + '!')
})

//TWO
btnTwo.addEventListener('click', function () {
    console.log('Hobby Nr. Two is: ' + hobbys[2] + '!')
})

//THREE
btnThree.addEventListener('click', function () {
    console.log('Hobby Nr. Three is: ' + hobbys[3] + '!')
    alarm();
})