const inputPW = document.getElementById('inputPW');
const btnView = document.getElementById('view');
const btnHide = document.getElementById('hide');
const newPW = document.getElementById('inputPW').value;
const btnSubmit = document.getElementById('submit');

let arrPW = [];

//view password
btnView.addEventListener('click', function(){
    inputPW.removeAttribute('type');
    console.log('view: ' + inputPW.value);
    
})


//hide password
btnHide.addEventListener('click', function(){
    inputPW.setAttribute('type','password');
    console.log('hide: ' +inputPW.value);
})


// //console.log(newPW)
// document.getElementById('submit').onclick = function () {
//     console.log(newPW)
    
// }

btnSubmit.addEventListener('click', function() {
    //input --> arrPW
    arrPW.push(inputPW.value);
    console.log(arrPW);
})