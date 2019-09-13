
class Drop {
    constructor(){
        //set the water drop points
        this.x = Math.random() * 400;
        this.y = 0;
    }
    update(){
        //set the speed of water drop
        this.y++;
        fill(0,0,200);
        circle(this.x, this.y, 5);
    }
}

class RainManager {
    //set constructor and made array for each drop to store
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
    }
}

class Ground{
    //constructor
        //set the starting color
        //start the drop hit count
    constructor(){
        this.r=255;
        this.g=255;
        this.b=255;
        this.hit = 0;
    }
    //update - make the ground
    update(){
        //strokeWeight(0);
        //fill (255);
        //ellipse(200,270,500,110);
        fill(this.r,this.g,this.b);
        stroke(0);
        strokeWeight(2);
        ellipse(185, 227, 80, 35);
        ellipse(90, 250, 155, 70);
        ellipse(287, 260, 220, 60);
        ellipse(185, 277, 120, 45);
    }
    //drop hit - called when a rain drop gets low enough (how do you inform it?)
        //change the color for every ten rain drops hit
    hitGround(){
        //Check if water drop touch the ground. When it's touch to the ground,
        //start the count whater drop that touch the ground
        //every 10 drop touch, ground color will change. And count set back to 0
        for(var i=0; i< rainManager.drops.length; i++){
            if(rainManager.drops[i].y==270){
                this.hit++;
                rainManager.drops.splice(i,1);
                if (this.hit == 10){
                    this.r=this.r-20;
                    this.g=this.g-20;
                    this.hit = 0;
                }
            }
        }
    }
}

//global variables
var ground = new Ground();
var rainManager = new RainManager();

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
    ground.hitGround();
}