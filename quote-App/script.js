// Hello Hannes

//URL: https://dummy-apis.netlify.app/api/quote

const btnQuote = document.querySelector('#btnQuote');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');


// Variante 1

async function addNewQuote() {
    const response = await fetch('https://dummy-apis.netlify.app/api/quote');
    const data = await response.json();

    quote.innerText = data.quote;
    author.innerText = data.author;
}

addNewQuote();

btnQuote.addEventListener('click', addNewQuote);

// ################################################

//Variante 2

// function addNewQuoteTWO() {
//     fetch('https://dummy-apis.netlify.app/api/quote')
//                 .then(response => {
//                    return response.json()  
                     
//                 })
//         .then(data => {
//             quote.innerText = data.quote;
//             author.innerText = data.author;
//         })
// }
// addNewQuoteTWO();

// btnQuote.addEventListener('click', addNewQuoteTWO);



