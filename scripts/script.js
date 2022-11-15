// function greet(name){
//     console.log("Hello", name);
// }

// let greet = function(name){
//     console.log(`Hello ${name}`);
// };
// let greet = (name, time) => {
//     console.log(`Hello ${name} the time is ${time}`);
// }
// var newtime = new Date();
// var print = greet(prompt("Please enter your name: "), newtime.getHours() + ":" + newtime.getMinutes() + ":" + newtime.getSeconds());


const unorderedlistelement = document.querySelector(".shopping");
function populateList (list){
    for (let i = 0 ; i < list.length ; i++){
        console.log(list[i]);
        const listItemElement = document.createElement("li");
        listItemElement.textContent = list[i];
        unorderedlistelement.append(listItemElement);
    }

}

let shoppinglist = ["cheese","bread","green pepper"];

populateList(shoppinglist,prompt());


