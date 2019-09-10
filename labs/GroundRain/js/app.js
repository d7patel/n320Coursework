
class Drop {
    constructor(){
        this.x = 40;
        this.y = 0;
    }

    update(){
        this.y++;
        fill(0,0,200);
        circle(this.x, this.y, 5);
    }
}
class Rain {
    constructor(){
        this.drops = [];
    }
    createDrop(){
        //stub
        //TODO: complete
    }
}

//run ones before the app starts
function setup(){
    createCanvas(400,300);
}
// run 60 times a second, or so
function draw(){
    d.update();
}