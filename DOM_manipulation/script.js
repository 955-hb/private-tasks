/*
const eins = document.querySelector('div');
const zwei = document.createElement('h2');

//eins gibt das eltern-Element vor
//zwei gibt an was eingesetzt wird (hier H2)

eins.appendChild(zwei);

//drei erzeugt neuen Knotenpunkt (einfügepunkt!)
const drei = document.createTextNode('Neuer Textknoten');

zwei.appendChild(drei)
*/

// ########################################################
// const eins = document.querySelector('div');
// const zwei = document.createElement('h2');
// const drei = document.querySelector('p');

// //zukünfites Eltern-Element ansprechen
// eins.insertBefore(zwei, eins.firstChild );

// console.log(eins.childNodes);

// ########################################################

const eins = document.querySelector('div');
const zwei = document.createTextNode('Inhalt');

eins.insertBefore(zwei, eins.lastChild);
console.log(eins.childNodes);