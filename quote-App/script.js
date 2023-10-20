// Hello Hannes

//URL: https://dummy-apis.netlify.app/api/quote

const btnQuote = document.querySelector('#btnQuote');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

async function addNewQuote() {
    const request = await fetch('https://dummy-apis.netlify.app/api/quote');
    const response = await request.json();

    quote.innerText = response.quote;
    author.innerText = response.author;
}

addNewQuote();

btnQuote.addEventListener('click', addNewQuote);


/*
async function addNewQuote() {
    let p = fetch('https://dummy-apis.netlify.app/api/quote');
    let p2 = p.then((response) => {

        quote.innerText = response.quote;
        author.innerText = response.author;

        return response.json();
    });
}
*/