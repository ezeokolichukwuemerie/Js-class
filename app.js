const person ={
    "name": "Ezeokoli Chukwuemerie",
    "age": 30,
    "Email": "ezeokolichukwuemerie@yahoo.com",
    "isSubscribed": true,
    "hobbies": ["Reading", "listening to music", "Playing table-tennis"],
    "Address": {
        "city": "New york",
        "idk": true
    }
}
console.log(person);
const jsonString = JSON.stringify(person); // this will convert back to JSON files by adding doubleQuote.
console.log(jsonString);
const parsedObject= JSON.parse(jsonString); // this will convert it back to object by removing the doubleQuote.
console.log(parsedObject);