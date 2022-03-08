// document.getElementById("count-el").innerText = 5;

// intialize the count as 0
//listen for clicks on the increment button
// increment the count variable when the button is clicked

// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el");
console.log(countEl);
let peopleCount = 0;

function increment() {
    peopleCount+= 1;
    countEl.textContent = peopleCount;
}



// 1. Create a function, save(), which logs out the count when it`s called
let savedNumbers = document.getElementById("saved-numbers");
function save() {
    
    let countDash = peopleCount + " - ";
    savedNumbers.textContent += countDash;
    countEl.textContent = 0;
    peopleCount = 0
}


let welcomeEl = document.getElementById("welcome-el");
let myName = "Dalius Ramonas! ";
let greeting = "Welcome back ";
welcomeEl.innerText = greeting + myName;

welcomeEl.innerText +="👋";