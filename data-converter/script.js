// Hallo Hannes

function convertData() {
    //user Input & Output

    let userInput = document.getElementById('userInput').value;
    let output = document.getElementById('displayOutput');

    let inputType = document.getElementById('inputType').value
    let outputType = document.getElementById('outputType').value

    //script for empty Inputs
    if (userInput == '' || inputType == '' || outputType == '') {
        output.classList.add('blink-error')
        output.innerHTML = 'Please fill required all inputs!'
    } else {
        output.classList.remove('blink-error')
    }
    // calculation
    let kilobyte, megabyte, gigabye, terabyte

    //KILOBYTES
    if (inputType == 'kilobyte' & outputType == 'kilobyte') {
        kilobyte = userInput
        output.innerHTML = `${userInput} Kb = ${kilobyte} Kb`
    
    } else if (inputType == 'kilobyte' & outputType == 'megabyte') {
        megabyte = userInput / 1024
        output.innerHTML = `${userInput} Kb = ${(megabyte)} Mb`
    
    } else if (inputType == 'kilobyte' & outputType == 'gigabyte'){
        gigabye = (userInput / 1024) / 1024;
        output.innerHTML = `${userInput} Kb = ${(gigabye)} Gb`
    
    } else if (inputType == 'kilobyte' & outputType == 'terabyte'){
        terabyte = (userInput / 1024) / 1024 / 1024;
        output.innerHTML = `${userInput} Kb = ${(terabyte)} Tb`
    }
}

