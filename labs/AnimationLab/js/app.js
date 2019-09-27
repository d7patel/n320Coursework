
var Place = document.querySelector("#place");
var BoxTemplate = document.querySelector("#boxTemplate");

 for(let i=0; i<6; i++){
 let sixBox = document.createElement("div");
  
    sixBox.classList.add("boxes");
    sixBox.style.animationDelay = i*0.3 + "s";
    
    //set up connections and events
    sixBox.addEventListener("mouseover", onCardOver);
    sixBox.addEventListener("mouseout", onCardOut);
    sixBox.addEventListener("click", onRemoveBox);
    
    //put onto the page
    Place.appendChild(sixBox);
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

function onRemoveBox(event) {
  event.target.classList.add("cardOut");
  event.target.classList.remove("boxes");
}