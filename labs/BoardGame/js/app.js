
var Place1 = document.querySelector("#place1");
var Place2 = document.querySelector("#place2");
var Place3 = document.querySelector("#place3");

 for(let i=0; i<3; i++){
 let threeBox = document.createElement("div");
  
    threeBox.classList.add("boxes");

    threeBox.style.animationDelay = i*0.1 + "s";
    
    //set up connections and events
    threeBox.addEventListener("mouseover", onCardOver);
    threeBox.addEventListener("mouseout", onCardOut);
    threeBox.addEventListener("click", onRemoveBox);
    
    //put onto the page
    Place1.appendChild(threeBox);
 }

 for(let i=0; i<3; i++){
  let threeBox = document.createElement("div");
   
    threeBox.classList.add("boxes");
    threeBox.style.animationDelay = i*0.1 + "s";
     
     //set up connections and events
     threeBox.addEventListener("mouseover", onCardOver);
     threeBox.addEventListener("mouseout", onCardOut);
     threeBox.addEventListener("click", onRemoveBox);
     
     //put onto the page
     Place2.appendChild(threeBox);
  }
  for(let i=0; i<3; i++){
    let threeBox = document.createElement("div");
     
      threeBox.classList.add("boxes");
      threeBox.style.animationDelay = i*0.1 + "s";
       
       //set up connections and events
       threeBox.addEventListener("mouseover", onCardOver);
       threeBox.addEventListener("mouseout", onCardOut);
       threeBox.addEventListener("click", onRemoveBox);
       
       //put onto the page
       Place3.appendChild(threeBox);
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