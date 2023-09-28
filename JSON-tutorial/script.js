console.log('Hello JSON!');


// JSON-PARSE()
const meJson = `
      {
          "name": "Hannes",
          "surname": "Mustermann",
          "age": 23,
          "favoriteColors": [
              "blue",
              "green"
          ]
      }`;

const user = JSON.parse(meJson);
console.log(user);
console.log(user.age)



// ################################################
console.log("################################################");
// JSON-STRINGIFY()
const car = {
    marke: "Honda",
    model: "Civic"
};

const carJson = JSON.stringify(car);
console.log(carJson)