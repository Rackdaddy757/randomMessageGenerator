
/*
The purpose of this challenge was to use javascript to create a random message. The random message
is created through the click of a button. 
*/ 

//Arrays used to create random messages
const city = ["Portsmouth", "Abilene", "Poughkeepsie", "New York"];
const state = ["Virginia", "Texas", "California", "New York"];
const rando = [
    "The alpaca is know to hunt tigers with their bear hoves in this location!",
    "The average pizza slice in this state is better than pizzas from Italy!",
    "There was a Wooly Mammoth spotted here in 1976!",
    "This city is the only city that Chuck Norris can't visit!"
];

//Function used to create and return the random message
const messageGenerator = () => {
const randomOutput = (arr) => {
    let output = arr[Math.floor(Math.random()*arr.length)];
    console.log(output)
    return output;
};
let rCity = randomOutput(city);
let rState = randomOutput(state);
let rRando = randomOutput(rando);
return `Here's a fun fact about ${rCity}, ${rState}. ${rRando}`;
};

//Event listener to display random message when a button is clicked
const msgButton = document.getElementById("messageButton");
msgButton.addEventListener("click", (event) => {
    document.getElementById("rMessage").innerHTML= messageGenerator();
})

/*Message generator formula
-Message needs to take random index value from each array and place it into the message variable.
-The function randomOutput gives me a random output for an array.
-Each variable needs to have the function randomOutput applied onclick and return a new variable
-How do I have the function store each new variable to place into the message variable
${newCity}, ${newState}. Did you know that ${newRando}
*/ 
//Create formula that randomly selects an index from an array. 