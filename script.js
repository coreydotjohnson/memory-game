const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

  let pickArr = [];
// TODO: Implement this function!
function handleCardClick(event) {

  if (pickArr.length < 2) {

    //get pick and its index
    let pick = event.target;
    let pickIndex = Array.from(pick.parentElement.children).indexOf(pick);
    pick.style.backgroundColor = pick.className;

    const ELEMENT = 0;
    const ELEMENT_INDEX = 1;
    
    //cant pick the same card twice
    if (pickArr.length === 1 && pickArr[ELEMENT][ELEMENT_INDEX] === pickIndex) return;
    pickArr.push([pick, pickIndex])

    //compare picks
    if (pickArr.length >= 2) {
      if (pickArr[0][0].className === pickArr[1][0].className && pickArr[0][1] != pickArr[1][1]) {
        console.log('Match!');
        pickArr = [];

    } else {

      setTimeout(function() {
        pickArr[0][0].style.backgroundColor = '';
        pickArr[1][0].style.backgroundColor = '';
        pickArr = [];
      }, 1000)

    }
  }
}

}

// when the DOM loads
createDivsForColors(shuffledColors);
