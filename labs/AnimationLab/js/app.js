
var Place = document.querySelector("#place");
var BoxTemplate = document.querySelector("#boxTemplate");

 for(let i=0; i<6; i++){
 let newCard = document.createElement("div");
  
    newCard.classList.add("boxes");
    newCard.style.animationDelay = i*0.3 + "s";
    
    //set up connections and events
    newCard.addEventListener("mouseover", onCardOver);
    newCard.addEventListener("mouseout", onCardOut);
    
    //put onto the page
    Place.appendChild(newCard);
 }

function onCardOver(event) {
  
  event.target.classList.add("cardOver");
  event.target.classList.remove("cardOut");
  event.target.style.animationDelay = "0s";
}

function onCardOut(event) {
  event.target.classList.add("cardOut");
  event.target.classList.remove("cardOver");
}