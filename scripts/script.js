// function greet(name){
//     console.log("Hello", name);
// }

// let greet = function(name){
//     console.log(`Hello ${name}`);
// };
let greet = (name) => {
    console.log(`Hello ${name}`);
}
greet(prompt("Please enter your name: "));