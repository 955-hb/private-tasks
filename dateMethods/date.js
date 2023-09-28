// ausgabe aktuelles datum







let dateMEZ = new Date();
console.log(dateMEZ);

let dateYear = dateMEZ.getFullYear();
console.log(dateYear);


// Monate Index 0 aufwärts! immer +1 (0 = Januar, 1 = Februar usw.....)
let dateMonth2 = dateMEZ.getMonth() + 1;
console.log(dateMonth2);

let dateMonth = new Date().getMonth() + 1;
console.log(dateMonth);







