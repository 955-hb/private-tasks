let users = `[
    {
        "name": "Max",
        "sureName": "Mustermann",
        "age": 33, 
        "birthyear": 1990,
        "online": true,
        "hobbys": ["biking", "swimming", "relaxing"]
    },
    {
        "name": "Marion",
        "sureName": "Musterfrau",
        "age": 37, 
        "birthyear": 1984,
        "online": false,
        "hobbys": ["relaxing", "coding", "drawing"]
    }
]`;

console.log(JSON.parse(users));