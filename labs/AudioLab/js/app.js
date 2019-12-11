var soundButtons = document.getElementById("soundButtons");

//var sounds = ["barradeen-late.mp3","chimes_long.mp3","click_clock_loop.mp3","pop_10.mp3","puff.mp3","rustle_5.mp3"];
var names = ['barradeen-late','chimes_long','click_clock_loop','pop_10','puff','rustle_5'];
var soundElements = [];

//loop through all the sounds and create audio tags for them
names.forEach((soundURL, idx) => {


    //the sound
    var newSound = new Audio("sounds/" + soundURL + ".mp3");

    //store each sound in an array for later reference
    soundElements.push(newSound);

    //create the button to play the sound
    var newButton = document.createElement("button");
    newButton.innerHTML = soundURL;
  
    //store the sound's index
    newButton.setAttribute("data-sound-id", idx)

    //add it to the page
    soundButtons.appendChild(newButton);

    //listen for a click on the button and invoke play sound function
    newButton.addEventListener("click", playSoundInArray );
})

// for(i=0; i<names.length; i++){
//     this.newButton.innerHTML = names[i];
// }

function playSoundInArray(event){
    //get sound index
    var soundIndex = Number(event.target.getAttribute("data-sound-id"));

    //get sound from array
    var selectedSound = soundElements[soundIndex];

    //play the selected sound
    selectedSound.play();
}

/*
//get the audio tag here
var myAudio = document.getElementById("myAudio");

function playAudio(){
    myAudio.play();
}
function stopMainAudio(){
    myAudio.pause();
}*/

