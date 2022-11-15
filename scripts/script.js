// function greet(name){
//     console.log("Hello", name);
// }

// let greet = function(name){
//     console.log(`Hello ${name}`);
// };
let greet = (name, time) => {
    console.log(`Hello ${name} the time is ${time}`);
}
var newtime = new Date();
var print = greet(prompt("Please enter your name: "), newtime.getHours() + ":" + newtime.getMinutes() + ":" + newtime.getSeconds());