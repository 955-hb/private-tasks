

const btn = document.querySelector('button');
btn.addEventListener('click', function () {

    const ul = document.querySelector('ul');
    const newLi = document.createElement('li');
    const liText = document.createTextNode('vier');
    newLi.appendChild(liText);

    ul.appendChild(newLi);

})