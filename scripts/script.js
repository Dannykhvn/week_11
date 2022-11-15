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
populateList(shoppinglist);


function changeListStyle(){
    unorderedlistelement.classList.add("squareList");
    unorderedlistelement.classList.remove("circleList");
    // unorderedlistelement.classList.replace("circleList","squareList"); //can use add or remove as well
    
}
changeListStyle();

function updateImage(){
    const imageElement = document.querySelector("#shoppingcart");
    console.log(imageElement);
    imageElement.src = "https://cdn-icons-png.flaticon.com/512/263/263142.png";
    imageElement.height = 100;
    imageElement.width = 100;
    imageElement.alt = "shopping cart icon"
}