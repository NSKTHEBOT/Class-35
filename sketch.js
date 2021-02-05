var Body;
var NIKUNJDB;
var Position;
var Positionpre;
function setup(){
    createCanvas(500,500);
    NIKUNJDB=firebase.database();
    console.log(NIKUNJDB);
    Body = createSprite(250,250,10,10);
    Body.shapeColor = "red";
    Positionpre=NIKUNJDB.ref("/")
    Positionpre.on("value",readPosition)
    console.log(Position);
    Position=Body;
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

    drawSprites();
}

function changePosition(x,y){
    NIKUNJDB.ref("Body/Position").update({
        x : Position.x + x,
        y : Position.y + y
    })


}
function readPosition(data){
    Position=data.val();
    Body.x=Position.x;
    Body.y=Position.y;
    console.log(Position.x)
    console.log(Position.y)
}