console.log('Hello Hannes');

/*
Able was i ere i saw Elba
Madam in Eden I'm Adam
A man, a plan, a canal: panama
was it a car or a cat i saw?
don't nod
Sir, i demand, i am a maid named iris
do geese see god
never odd or even
red roses run no risk, sir, on nurses order
was it a rat i saw
*/

function isPalindrome (str) {
    str = str
        .replace(/[^A-Za-z]/g, '')
        .toLowerCase();

    let reversed = str
        .split('')
        .reverse()
        .join('');

    return str === reversed;
}

console.log(
    isPalindrome('Able was i ere i saw Elba')
); //true
console.log(
        isPalindrome('Able was i ere i saw Elba')
    ); //true 
