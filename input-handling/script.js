/*
input= class="inputPW" id="inputPW"
button = class="btnSubmit"
btnClearLS
inputName
inputAge
*/

let contactData = {
    name: "",
    age: null
};

// DOM-DOCUMENT
const name = document.getElementById('inputName');
const age = document.getElementById('inputAge');
const btnSubmit = document.getElementById('btnSubmit');
const btnClearLS = document.getElementById('btnClearLS');


// EVENTS
btnSubmit.addEventListener('click', function () {
    

    contactData.name = name.value;
    contactData.age = age.value;

    // laden in LocalStorage
    window.localStorage;
    localStorage.setItem(name.value, age.value);
    
    //leeren der Inputfelder
    name.value = null;
    age.value = null;

    
})

btnClearLS.addEventListener('click', function () {
    localStorage.clear();
})

console.log(contactData);