// Hello Hannes

//npm-file = https://www.npmjs.com/search?q=date%20and%20time
import date from "./node_modules/date-and-time/esm/date-and-time.es.min.js";


const usersListEl = document.querySelector('#users');
const apiUrl = 'https://dummyjson.com/users';

const users = await getUsersData();

renderUsers();
 
async function getUsersData (){
    const request = await fetch(apiUrl + '?limit=12')
    //console.log(request);
    const data = await request.json();
    //console.log(data.users)

    return data.users;
} 


function renderUsers() {
    users.forEach(function(user){
        const userContainer = document.createElement('li');

        const profileImg = document.createElement('img');
        profileImg.src = user.image; 

        const name = document.createElement('p');
        name.innerText = user.firstName + ' ' + user.lastName;

        const birthday = document.createElement('p');
        const birthDate = new Date(user.birthDate)
        const formatedDate = date.format(birthDate, 'DD.MM.YYYY')
        birthday.innerText = formatedDate
        

        userContainer.append(profileImg, name, birthday)
        usersListEl.append(userContainer);
    })
}