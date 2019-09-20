class Ball {
    // set starting position of the ball
    constructor() {
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 10, y: 0 };
    }
    // upddate the speed of the ball here
    // this pattern is Observer Pattern
    update() {
      
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
      
        circle(this.position.x, this.position.y, 20);
      
        // change the background color when ball hit any side of the canvas
        // increase square sizes when ball hit any side of the canvas
        if(this.position.x < 0 || this.position.x > 400) {
            //when the square size is less then 195, it will increase the size
            if(squ.size1<=195){
                squ.increasBox();
            }
            //when the square size is more then 195, it will set back to size 5
            else{
                squ.size1 = 5;
                squ.size2 = -5;
            }
            World.ballBeyond(this);    
        }
    }
}
// this pattern is Observer Pattern
// set rendom background color and rendom ball speed
var World = {
    bgcolor: [237, 119, 83],
    ballBeyond: function(whichBall) {
        this.bgcolor = [ Math.random()*255, Math.random()*255, 83 ];
        whichBall.position.x = 100;
        whichBall.velocity.x = (Math.random() - 0.5 ) * 20;
    }
}
  
//class for a box
class Box{
    // make constructor and initialize size of the square
    constructor(){
        this.size1 = 5;
        this.size2 = -5;
    }
    // create two square
    update(){
        square(0,0,this.size1);
        square(400,300,this.size2);
    }
    // increase square sizes when ball hit any side of the canvas
    increasBox(){
        this.size1 += 5;
        this.size2 -= 5;
    }
}
// global variable
var ball = new Ball();
var squ = new Box();

  
function setup() {
    createCanvas(400,300);
}
  
function draw() {
    background( World.bgcolor );
    
    ball.update();
    squ.update();
}