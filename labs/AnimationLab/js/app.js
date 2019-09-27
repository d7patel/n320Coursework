var Box1 = document.querySelector("#box1");
var Box2 = document.querySelector("#box2");

 Box1.addEventListener("mouseover", onCardOver);
 Box1.addEventListener("mouseout", onCardOut);

function onCardOver(event) {
  event.target.style.animationDelay = "0s";
  event.target.classList.add("cardOver");
  event.target.classList.remove("cardOut");
}

function onCardOut(event) {
  event.target.classList.add("cardOut");
  event.target.classList.remove("cardOver");
}