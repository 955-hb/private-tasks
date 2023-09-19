

// erstellen Button
const an = document.getElementById('an');
const aus = document.getElementById('aus');
const heading = document.getElementById('heading');

// erstellen events

//ON
an.addEventListener('click', function(){
    console.log('Licht AN!');
    body.style.backgroundColor = 'lightblue';
    document.title = 'Good Morning Hannes!';
    an.style.backgroundColor = 'yellow';
    pAn.style.color = 'black';
    heading.style.color = 'black';

    //aus-Button Style
    pAus.style.color = 'red';
    aus.style.backgroundColor = 'white'
    
})

//OFF
aus.addEventListener('click', function() {
    console.log('Licht AUS');
    body.style.backgroundColor = 'midnightblue';
    document.title = 'Good Night Hannes!';
    aus.style.color = 'black';
    aus.style.backgroundColor = 'yellow'
    heading.style.color = 'yellow';

    //an-Button Style
    pAn.style.color = 'red';
    an.style.backgroundColor = 'white';
})



/*
document.body.classList.add("body--dark");
    btn.classList.add("button-dark");
    document.title = "Good Night";
*/
