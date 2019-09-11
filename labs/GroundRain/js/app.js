
class Drop {
    constructor(){
        this.x = Math.random() * 400;
        this.y = 0;
    }

    update(){
        this.y++;
        fill(0,0,200);
        circle(this.x, this.y, 5);
    }
}
class RainManager {
    constructor(){
        this.drops = [];
    }
    createDrop(){
        //Make a new drop
        var newDrop = new Drop();

        //add this new drop to our collection of drops
        this.drops.push(newDrop);
    }

    update(){
        for(var i=0; i< this.drops.length; i++){
            this.drops[i].update();
        }
        console.log(this.drops[0]);
    }
}

class Ground{
    //constructor
        //set the starting color
        //start the drop hit count
    constructor(){
        this.color =255;
        this.dropHit = 0;
    }
    //update - draws the rectangle to the screen 
    update(){
   
        fill(this.color);
        stroke(0);
        strokeWeight(2);
        rect(2,250,395,298);
    }
    
    

    //drop hit - called when a rain drop gets low enough (how do you inform it?)
   
        //change the color for every ten rain drops hit

}

//global variables
var rainManager = new RainManager();
var ground = new Ground();

//run ones before the app starts
function setup(){
    createCanvas(400,300);
}
// run 60 times a second, or so
function draw(){
    // clear out background
    background(255);

    // create a new drop on a 5% chance
    if (Math.random() < 0.05){
        rainManager.createDrop();

    }

    rainManager.update();
    ground.update();
}