// Hallo Hannes

function randomPassword () {
    let displayPassword = document.getElementById('display-password'); //const
    let passwordLength = document.getElementById('password-length').value; //const
    let error = document.getElementById('error-info'); //const
    let password = '';
    let characters = //const
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890<^<^1234567890ß#+*.,;:[]|{}/()=?!"§$%&';

    //if user not selected length
    console.log(typeof passwordLength);
    if (parseInt(passwordLength) === 0) {
        error.innerHTML = 'Please select password length';
        error.style.padding = '10px 15px'; // direkt css

        //nicht mit timeout arbeiten. --> event
        setTimeout(() => {
            error.style.visibility = 'hidden';
            window.location.reload()
        }, 2000); // länger
    }


        //random password generate
        for (let i = 0; i< passwordLength; i++) {
          password += characters[Math.floor(Math.random() * characters.length)];
        } 
        displayPassword.value = password;
}