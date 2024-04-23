var person = `
[
    {
        "name":"Ashutosh",
        "roll":2301301085,
        "course":"btech cse"
    },  
    {
        "name":"Ashutosh",
        "roll":2301301085,
        "course":"btech cse",
        "friends":["Ashutosh","Aman","prince"],
        "isprogrammer":true,
        "skills": {
            "programming":"PHP",
            "Exprience":"2 years"
        },
        "anotherskills":null
    }
]

`;
console.log(person);
var conobj = JSON.parse(person);//convert json string into javascript object.

console.log(conobj);

var myobj = {
    name:'Ashutosh',
        roll:2301301085,
        course:'btech cse'
}
console.log(myobj);
var conobj = JSON.parse(person);
